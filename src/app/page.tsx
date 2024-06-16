"use client";
import HomePage from "@/components/Pages/HomePage";
import _404 from "@/components/Pages/_404";
import { Login, Register, RetriveMe } from "@/utils/requests";
import { useWebApp } from "@vkruglikov/react-telegram-web-app";
import React, { useState, useEffect } from "react";
import { fetchAccessToken, setAccessToken } from "@/utils/api";
import LoadingPage from "@/components/Pages/LoadingPage";
import { UserContext } from "@/hooks/UserContext";
import { UserData } from "@/types";

const Home = () => {
  const webAppData = useWebApp();
  const [show404, setShow404] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<UserData>();

  useEffect(() => {
    const userData = webAppData.initDataUnsafe;
    const getUserAuth = async () => {
      try {
        const response = await fetchAccessToken();
        // try {
        //   //User is not authenticated
        if (response.data.accessToken.value === "") {
          try {
            const userInfo = {
              password: `${userData.user.id}`,
              username: userData.user.username,
              first_name: userData.user.first_name,
              referral_code: userData.start_param ?? "",
              is_premium_user: userData.user.is_premium_user ?? false,
            };
            // Register user function
            Register(userInfo)
              .then((e) => {
                const storeData = async () => {
                  try {
                    // Ensure userData is a JSON string before storing
                    const dataToStore =
                      typeof e === "string" ? e : JSON.stringify(e);
                    const accessTokenToStore =
                      JSON.parse(dataToStore).token.access;

                    //setToken Function
                    //
                    await setAccessToken(accessTokenToStore);
                    RetriveMe()
                      .then((e) => {
                        setUser(e);
                        setIsLoading(false);
                      })
                      .catch((e) => {
                        console.error("Error when retriving me:", e);
                      });
                  } catch (error) {
                    alert(`Error storing data on register: ${error}`);
                  }
                };
                storeData();
              })
              .catch((e) => alert(`Error from Register ${JSON.stringify(e)}`));

            // console.log('Response:', result);
          } catch (error) {
            console.error("Error from Register || login:", error);
          }
        } else {
          // Always Login User
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
                      alert("Stage 2");
                      // Register user function
                      Register(userInfo)
                        .then((e) => {
                          alert("Stage 3");
                          const storeData = async () => {
                            alert("Stage 4");
                            try {
                              alert("Stage 5");
                              // Ensure userData is a JSON string before storing
                              const dataToStore =
                                typeof e === "string" ? e : JSON.stringify(e);
                              const accessTokenToStore =
                                JSON.parse(dataToStore).token.access;
                              alert(`Registration Token${accessTokenToStore} `);
                              alert(`Registration data ${dataToStore} `);

                              //setToken Function
                              //
                              await setAccessToken(accessTokenToStore);
                              RetriveMe()
                                .then((e) => {
                                  setUser(e);
                                  alert(JSON.stringify(user));
                                  setIsLoading(false);
                                })
                                .catch((e) => {
                                  console.error(
                                    "Error when retriving me after login fail:",
                                    e
                                  );
                                });
                              const rsa = await fetchAccessToken();
                              alert(
                                `Registration Token Registered SuccessFull${JSON.stringify(
                                  rsa.data.accessToken.value
                                )} Compared ${accessTokenToStore} `
                              );
                            } catch (error) {
                              alert(
                                `Error storing data on register after login fail: ${error}`
                              );
                            }
                          };
                          storeData();
                        })
                        .catch((e) =>
                          alert(`Error from Register ${JSON.stringify(e)}`)
                        );

                      // console.log('Response:', result);
                    } catch (error) {
                      console.error(
                        "Error from Register || login after login fail:",
                        error
                      );
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
                          console.error("Error when retriving me:", e);
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
            // User is authenticated
            //alert(`accessToken cookie4 ${response.data.accessToken.value} `)
          };

          storeToken();
        }
      } catch (error) {
        alert(`Error fetching login data in App: ${error}`);
      }
    };
    getUserAuth();
  }, [user, setUser, isLoading, setIsLoading]);
  useEffect(() => {
    if (webAppData) {
      if (
        webAppData.platform &&
        (webAppData.platform === "unknown" ||
          webAppData.platform === "tdesktop")
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
        // Example POST request
      }
    }
  }, [webAppData, user]);

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
        (isLoading && user ? (
          <LoadingPage />
        ) : (
            <UserContext.Provider value={user}>
              <HomePage />
            </UserContext.Provider>
        ))
      )}
    </>
  );
};

export default Home;
