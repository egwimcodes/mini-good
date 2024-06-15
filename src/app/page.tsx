"use client"
import HomePage from '@/components/Pages/HomePage';
import _404 from '@/components/Pages/_404';
import { Register, RetriveMe } from '@/utils/requests';
import { useWebApp } from '@vkruglikov/react-telegram-web-app';
import React, { useState, useEffect } from 'react';
import { fetchAccessToken } from '@/utils/api';


const Home = () => {
  const webAppData = useWebApp();
  const [show404, setShow404] = useState(false);
  //const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const getData = async () => {
      try {
        // User is not authenticated

        const response = await fetchAccessToken();

        if (response && response.data.accessToken.value === "") {
          try {
            const userData = webAppData.initDataUnsafe;
            const userInfo = {
              password: `${userData.user.id}`,
              username: userData.user.username,
              first_name: userData.user.first_name,
              referral_code: userData.start_param ?? "",
              is_premium_user: userData.user.is_premium_user
                ?? false
            };
            // Register user function
            Register(userInfo)
              .then((e) => {
                const storeData = async () => {
                  try {
                    // Ensure userData is a JSON string before storing
                    const dataToStore = typeof e === 'string' ? e : JSON.stringify(e);
                    const accessTokenToStore = JSON.parse(dataToStore).token.access;

                    // alert(`Registration Data ${dataToStore} `)
                    alert(`Registration accessToken ${accessTokenToStore} `)
                    alert('User is authenticated after registration');


                    // Store access token
                    try {
                      await fetch('/api/login', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(
                          { token: accessTokenToStore }
                        ),
                      });

                      if (!response.ok) {
                        alert('Network response was not ok');
                        throw new Error('Network response was not ok');
                      }

                      const result = await response.json()
                      alert(`Result after store ${JSON.stringify(result.data.accessToken.value)}`)
                    } catch (error) {
                      alert(`Error storing data: and Posting ${error}`);
                    }


                  } catch (error) {
                    alert(`Error storing data: ${error}`);
                  }
                }
                storeData();
              })
              .catch(
                (e) => alert(`Error from Register ${JSON.stringify(e)}`)
              );
            ;
            // console.log('Response:', result);

          } catch (error) {
            console.error('Error posting data:', error);
          }
        }
        else {

          // User is authenticated
          alert(`accessToken cookie4 ${response.data.accessToken.value} `)
          RetriveMe().then((e) => {
            alert(`accessToken cookie5 ${JSON.stringify(e)}`)
          }).catch((e) => {
            console.error('Error posting data:', e);
          });
        }
      } catch (error) {
        alert(`Error fetching login data: ${error}`);
      }
    }
    getData();
    if (webAppData) {
      if (webAppData.platform && (webAppData.platform === 'unknown' || webAppData.platform === 'tdesktop')) {
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
          referral_code: userData.start_param ?? '',
          is_premium_user: userData.user.is_premium_user ?? false,
        };
        console.log(userInfo);
        // Example POST request



      }
    }
  }, [webAppData]);

  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <>
      {show404 ? (
        <_404 />
      ) : (
        webAppData?.platform &&
        (webAppData.platform === 'android' || webAppData.platform === 'ios') &&
        webAppData.initDataUnsafe && <HomePage />
      )}
    </>
  );
};

export default Home;
