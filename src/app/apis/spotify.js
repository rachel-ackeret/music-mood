const baseUrl = "https://api.spotify.com/v1"
import { getSpotifyAccessToken } from './access';

const getTrackRecommendations = async (savedUserChoices) => {

    const seedGenres = savedUserChoices.genre && `seed_genres=${savedUserChoices.genre}?`;
    const targetDanceabiliity = savedUserChoices.mood && `seed_genres=${savedUserChoices.genre}?`;
    const targetEnergy = savedUserChoices.energy && `seed_genres=${savedUserChoices.genre}?`;

    const url = `${baseUrl}/recommendations/available-genre-seeds&`;

    return makeSpotifyApiRequest(url).then(data => {
        return data;
    }).catch(error => {
        console.error('Error making API request:', error);
        return null;
    });
};

const getGenreRecommendations = async () => {
    const url = `${baseUrl}/recommendations/available-genre-seeds`;

    return makeSpotifyApiRequest(url).then(data => {
        return data;
    }).catch(error => {
        console.error('Error making API request:', error);
        return null;
    });
};

const makeSpotifyApiRequest = async (url, method = 'GET', body = null) => {
    const accessToken = await getSpotifyAccessToken();
  
    // Continue with your API request using the accessToken
    return fetch(url, {
        method: method,
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        },
        body: body ? JSON.stringify(body) : null
    }).then(response => {
        if (response.ok) {
            return response.json();
        } else if (response.status === 401) {
            throw new Error('authorization error');
        } else {
            throw new Error(response.error);
        }
    });
}

export {
    getGenreRecommendations,
    getTrackRecommendations
}
