import NodeCache from 'node-cache';

const cache = new NodeCache();


/** 
 * SPOTIFY ACCESS RETRIEVAL
*/

export const getSpotifyAccessToken = async () => {
    let accessToken = await cache.get("spotify_access_token");
    if (accessToken) {
        return accessToken;
    } else {
        const newAccessToken = await retrieveSpotifyToken();
        cache.set("spotify_access_token", newAccessToken, (59 * 60)); // Cache for 59 minutes
        return newAccessToken;
    }
}

export const retrieveSpotifyToken = async () => {
    /**
     * For more information, read
     * https://developer.spotify.com/web-api/authorization-guide/#client_credentials_flow
    */

    const clientId = process.env.REACT_APP_CLIENT_ID; // Your client id
    const clientSecret = process.env.REACT_APP_CLIENT_SECRET; // Your secret

    // Base64 encode the client ID and client secret
    const base64Credentials = btoa(`${clientId}:${clientSecret}`);

    // Spotify token endpoint
    const tokenEndpoint = 'https://accounts.spotify.com/api/token';

    // Data for the token request
    const tokenRequestBody = new URLSearchParams();
    tokenRequestBody.append('grant_type', 'client_credentials');

    // Fetch options for the request
    const fetchOptions = {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${base64Credentials}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: tokenRequestBody,
    };

    // Make the token request
    return fetch(tokenEndpoint, fetchOptions)
        .then(response => response.json())
        .then(data => {
            // The response data contains the access token
            const accessToken = data.access_token;
            return accessToken;
        })
        .catch(error => {
            console.error('Error fetching access token:', error);
        });
}
