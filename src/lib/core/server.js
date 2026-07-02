
// const backendUrl = "https://p-hero-wd-a10-resell-hub-server.vercel.app/api" || "http://localhost:4000/api" || process.env.BACKEND_URL; // Replace with your backend server URL
const backendUrl ="http://localhost:4000/api"; // Replace with your backend server URL
export const serverFetch = async (path, method = 'GET') => {
    try {
        const res = await fetch(`${backendUrl}${path}`,{
            method: method
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching data from server:", error);
        return [];
    }
}

export const serverPost = async (path, body, method = 'POST') => {
    try {
        const res = await fetch(`${backendUrl}${path}`, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error posting data to server:", error);
        return null;
    }
}


