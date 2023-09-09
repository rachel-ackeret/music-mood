import 'server-only';
import { getSpotifyAccessToken } from './access';

const baseUrl = "https://api.spotify.com/v1"

const getApiTrackRecommendations = async (savedUserChoices) => {
    const seedCriteria = {
        seed_genres: savedUserChoices.genre || 'dance', // a choice is required for recommendations
        target_energy: savedUserChoices.energy || 0.5,
        target_danceability: savedUserChoices.mood || 0.5,

        // These are experimental, may not keep.
        target_acousticness: savedUserChoices.mood && (1 - savedUserChoices.mood).toFixed(2),
        // target_tempo: savedUserChoices.energy && (savedUserChoices.energy * 170).toFixed(1),
    }

    const criteria = Object.keys(seedCriteria)
        .map(key => {
            return `${key}=${seedCriteria[key]}`;
        })
        .join('&');

    const url = `${baseUrl}/recommendations?limit=7&${criteria}`;

    return makeSpotifyApiRequest(url).then(data => {
        return data;
    }).catch(error => {
        console.error('Error making API request:', error);
        return null;
    });
};

const getApiGenreRecommendations = async () => {
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
        cache: "reload",
        method: method,
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        },
        body: body ? JSON.stringify(body) : null,
    }).then(response => {
        if (response.ok) {
            return response.json();
        } else if (response.status === 401) {
            throw new Error('authorization error');
        } else {
            throw new Error(response.error);
        }
    });
};

export {
    getApiGenreRecommendations,
    getApiTrackRecommendations
}
