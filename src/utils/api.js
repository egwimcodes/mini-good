const fetchAccessToken = async () => {
    try {
        const response = await fetch('/api/login', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include', // Include credentials (cookies) in the request
        });

        alert("before check ")
        alert(` Before Json response ${response}`)
        alert(`Json response ${response.json()}`)


        const data = await response.json();
        alert("response check ")

        return data;
    } catch (error) {
        console.error('Error fetching login data:', error);
        throw error; // Re-throw the error to handle it where the function is called
    }
};

export { fetchAccessToken };