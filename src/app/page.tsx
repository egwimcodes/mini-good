"use client"
import HomePage from '@/components/Pages/HomePage';
import _404 from '@/components/Pages/_404';
import { Register } from '@/utils/requests';
import { useWebApp } from '@vkruglikov/react-telegram-web-app';
import React, { useState, useEffect } from 'react';


const Home = () => {
  const webAppData = useWebApp();
  const [show404, setShow404] = useState(false);


  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('/api/login', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        if (data && data.data.accessToken) {
          // User is authenticated
          alert('User is authenticated now');

        } else {
          // User is not authenticated
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
            Register(userInfo)
              .then((e) => {
                const storeData = async () => {
                  try {
                    // Ensure userData is a JSON string before storing
                    const dataToStore = typeof e === 'string' ? e : JSON.stringify(e);
                    const accessTokenToStore = JSON.parse(dataToStore).token.access;

                    // alert(`Registration Data ${dataToStore} `)
                     alert(`Registration Data ${accessTokenToStore} `)
                    alert('User is authenticated after registration');
                  } catch (error) {
                    alert(`Error storing data: ${error}`);
                  }
                }
                storeData();
              })
              .catch(
                (e) => alert(`Error from Register ${JSON.stringify(e)}`)
              );

            //const accessTokenToStore = data.data.accessToken;
            // await fetch('/api/your-route-name', {
            //   method: 'POST',
            //   headers: {
            //     'Content-Type': 'application/json',
            //   },
            //   body: JSON.stringify(data),
            // });

            // if (!response.ok) {
            //   throw new Error('Network response was not ok');
            // }

            // const result = await response.json();
            // console.log('Response:', result);

          } catch (error) {
            console.error('Error posting data:', error);
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
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
