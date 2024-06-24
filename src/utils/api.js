const fetchAccessToken = async () => {
    try {
        const response = await fetch('/api/login', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include', // Include credentials (cookies) in the request
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching login data:', error);
        throw error; // Re-throw the error to handle it where the function is called
    }
};


const setAccessToken = async (accessTokenToStore) => {
    // Store access token
    try {
        const res = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                { token: accessTokenToStore }
            ),
        });

        if (!res.ok) {
            alert('Network response was not ok....');
            throw new Error('Network response was not ok');
        }

    } catch (error) {
        alert(`Error storing data: and Posting ${error}`);
    }
 }



export { fetchAccessToken, setAccessToken };