"use client";

import HomePage from "@/components/Pages/HomePage";
import _404 from "@/components/Pages/_404";
import {Login, Register, RetriveMe } from "@/utils/requests";
import { useWebApp } from "@vkruglikov/react-telegram-web-app";
import React, { useState, useEffect } from "react";
import { fetchAccessToken, setAccessToken,} from "@/utils/api";
import LoadingPage from "@/components/Pages/LoadingPage";
import { UserContext } from "@/hooks/UserContext";
import { UserData } from "@/types";

const Home = () => {
  const webAppData = useWebApp();
  const [show404, setShow404] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<UserData | null>(null); // Initialize user state as null or 
  const [token, setToken] = useState<string >();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchAccessToken();

      try {
        if (response.data.accessToken.value === "") {
          try {
            const userData = webAppData.initDataUnsafe;
            const userInfo = {
              password: `${userData.user.id}`,
              username: userData.user.username,
              first_name: userData.user.first_name,
              referral_code: userData.start_param ?? "",
              is_premium_user: userData.user.is_premium_user ?? false,
            };
            Register(userInfo)
              .then(async (e) => {
                const dataToStore =
                  typeof e === "string" ? e : JSON.stringify(e);
                const accessTokenToStore =
                  JSON.parse(dataToStore).token.access;
                setToken(accessTokenToStore);
                await setAccessToken(accessTokenToStore);

                // Retrieve user data after registration
                RetriveMe()
                  .then((e) => {
                    setUser(e);
                    setIsLoading(false);
                  })
                  .catch((e) => {
                    console.error("Error when retrieving me:", e);
                    setIsLoading(false); // Handle error and stop loading
                  });
              })
              .catch((e) => {
                console.error("Error from Register:", e);
                setIsLoading(false); // Handle error and stop loading
              });
          } catch (error) {
            console.error("Error from Register || login:", error);
            setIsLoading(false); // Handle error and stop loading
          }
        } else {
          const userData = webAppData.initDataUnsafe;
          
          const userLoginInfo = {
            username: userData.user.username,
            password: userData.user.id,
          };

          Login(userLoginInfo)
            .then(async (e) => {
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
                    .then(async (e) => {
                      const dataToStore =
                        typeof e === "string" ? e : JSON.stringify(e);
                      const accessTokenToStore =
                        JSON.parse(dataToStore).token.access;
                      setToken(accessTokenToStore);
                      await setAccessToken(accessTokenToStore);

                      // Retrieve user data after registration
                      RetriveMe()
                        .then((e) => {
                          setUser(e);
                          setIsLoading(false);
                        })
                        .catch((e) => {
                          console.error(
                            "Error when retrieving me after login fail:",
                            e
                          );
                          setIsLoading(false); // Handle error and stop loading
                        });
                    })
                    .catch((e) => {
                      console.error("Error from Register:", e);
                      setIsLoading(false); // Handle error and stop loading
                    });
                } catch (error) {
                  console.error("Error from Register || login:", error);
                  setIsLoading(false); // Handle error and stop loading
                }
              } else {
                await setAccessToken(e.access);
                // Retrieve user data after successful login
                RetriveMe()
                  .then((res) => {
                    setUser(res);
                    setIsLoading(false);
                  })
                  .catch((e) => {
                    console.error("Error when retrieving me:", e);
                    setIsLoading(false); // Handle error and stop loading
                  });
              }
            })
            .catch((e) => {
              console.error("Error from Login call:", e);
              setIsLoading(false); // Handle error and stop loading
            });
        }
      } catch (error) {
        console.error("Error fetching login data in App:", error);
        setIsLoading(false); // Handle error and stop loading
      }
    };

    if (!user) {
      fetchData(); // Fetch data only if user is not already set
    }
  }, [user, webAppData]); // Dependency array should include webAppData to ensure useEffect is triggered when webAppData changes


  useEffect(() => {
  if (user !== null) {
    const fetchUpdatedData = async () => {
      RetriveMe()
        .then((e) => {
          setUser(e);
          setIsLoading(false);
        })
        .catch((e) => {
          console.error("Error when retrieving  updated me:", e);
          setIsLoading(false); // Handle error and stop loading
        });
    }
    const intervalid = setInterval(fetchUpdatedData, 1000);
    return () => clearInterval(intervalid);
    
  }
})

  useEffect(() => {
    if (webAppData) {
      if (
        webAppData.platform &&
        (webAppData.platform === "unknown" ||
          webAppData.platform === "tdesktop")
      ) {
        setShow404(true);
      } else {
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
  }, [webAppData]); // Include webAppData in dependency array

  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  if (show404) {
    return <_404 />;
  }

  if (isLoading || !user) {
    return <LoadingPage />;
  }

  // Render HomePage only when user data is loaded
  return (
         
    <UserContext.Provider value={user}>
      <HomePage token={ token ? token : "" } />
    </UserContext.Provider>
  );
};

export default Home;
