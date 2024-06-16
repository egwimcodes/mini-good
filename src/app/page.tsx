"use client";

import HomePage from "@/components/Pages/HomePage";
import _404 from "@/components/Pages/_404";
import { useWebApp } from "@vkruglikov/react-telegram-web-app";
import React, { useState, useEffect } from "react";
import LoadingPage from "@/components/Pages/LoadingPage";
import { UserContext } from "@/hooks/UserContext";
import { UserData } from "@/types";
import { fetchAccessToken, setAccessToken } from "@/utils/api"; // Adjust the imports as necessary
import { Login, Register, RetriveMe } from "@/utils/requests";

const Home = () => {
  const webAppData = useWebApp();
  const [show404, setShow404] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchAccessToken();
        const userData = response.data; // Adjust based on your actual data structure
        setUser(userData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const userData = webAppData.initDataUnsafe;
    const getUserAuth = async () => {
      try {
        const response = await fetchAccessToken();
        if (response.data.accessToken.value === "") {
          try {
            const userInfo = {
              password: `${userData.user.id}`,
              username: userData.user.username,
              first_name: userData.user.first_name,
              referral_code: userData.start_param ?? "",
              is_premium_user: userData.user.is_premium_user ?? false,
            };
            Register(userInfo)
              .then((e) => {
                const storeData = async () => {
                  try {
                    const dataToStore = typeof e === "string" ? e : JSON.stringify(e);
                    const accessTokenToStore = JSON.parse(dataToStore).token.access;
                    await setAccessToken(accessTokenToStore);
                    RetriveMe()
                      .then((e) => {
                        setUser(e);
                        setIsLoading(false);
                      })
                      .catch((e) => {
                        console.error("Error when retrieving me:", e);
                      });
                  } catch (error) {
                    alert(`Error storing data on register: ${error}`);
                  }
                };
                storeData();
              })
              .catch((e) => alert(`Error from Register ${JSON.stringify(e)}`));
          } catch (error) {
            console.error("Error from Register || login:", error);
          }
        } else {
          const storeToken = async () => {
            const userLoginInfo = {
              username: userData.user.username,
              password: `${userData.user.id}`,
            };
            try {
              Login(userLoginInfo)
                .then((e) => {
                  if (e.name === "AxiosError") {
                    try {
                      const userInfo = {
                        password: `${userData.user.id}`,
                        username: userData.user.username,
                        first_name: userData.user.first_name,
                        referral_code: userData.start_param ?? "",
                        is_premium_user: userData.user.is_premium_user ?? false,
                      };
                      Register(userInfo)
                        .then((e) => {
                          const storeData = async () => {
                            try {
                              const dataToStore = typeof e === "string" ? e : JSON.stringify(e);
                              const accessTokenToStore = JSON.parse(dataToStore).token.access;
                              await setAccessToken(accessTokenToStore);
                              RetriveMe()
                                .then((e) => {
                                  setUser(e);
                                  setIsLoading(false);
                                })
                                .catch((e) => {
                                  console.error("Error when retrieving me after login fail:", e);
                                });
                            } catch (error) {
                              alert(`Error storing data on register after login fail: ${error}`);
                            }
                          };
                          storeData();
                        })
                        .catch((e) => alert(`Error from Register ${JSON.stringify(e)}`));
                    } catch (error) {
                      console.error("Error from Register || login after login fail:", error);
                    }
                  } else {
                    const storeDataFunc = async () => {
                      await setAccessToken(e.access);
                      RetriveMe()
                        .then((res) => {
                          setUser(res);
                          setIsLoading(false);
                        })
                        .catch((e) => {
                          console.error("Error when retrieving me:", e);
                        });
                      setIsLoading(false);
                    };
                    storeDataFunc();
                  }
                })
                .catch((e) => {
                  alert(`Error from Login call ${JSON.stringify(e)}`);
                });
            } catch (error) {
              alert(`Error from login this user: ${error}`);
            }
          };
          storeToken();
        }
      } catch (error) {
        alert(`Error fetching login data in App: ${error}`);
      }
    };
    getUserAuth();
  }, [webAppData]);

  useEffect(() => {
    if (webAppData) {
      if (
        webAppData.platform &&
        (webAppData.platform === "unknown" || webAppData.platform === "tdesktop")
      ) {
        setShow404(true);
        return;
      }

      if (webAppData.platform) {
        webAppData.expand();
        const userData = webAppData.initDataUnsafe;
        const userInfo = {
          password: `${userData.user.id}`,
          username: userData.user.username,
          first_name: userData.user.first_name,
          referral_code: userData.start_param ?? "",
          is_premium_user: userData.user.is_premium_user ?? false,
        };
        console.log(userInfo);
      }
    }
  }, [webAppData]);

  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <>
      {show404 ? (
        <_404 />
      ) : (
        webAppData?.platform &&
        (webAppData.platform === "android" || webAppData.platform === "ios") &&
        webAppData.initDataUnsafe &&
        (isLoading ? (
          <LoadingPage />
        ) : (
          user ? (
            <UserContext.Provider value={user}>
              <HomePage />
            </UserContext.Provider>
          ) : (
            <LoadingPage />
          )
        ))
      )}
    </>
  );
};


export default Home;
