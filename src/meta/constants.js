import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export const CLIENT_ID = '492052833051475981';
export const BASE_WEB_URL = process.env.NODE_ENV === 'production' ? 'http://localhost:5000' : 'http://localhost:3000'
export const BASE_API_URL = 'http://localhost:4000';

export const oauthURL = new URL('https://discordapp.com/oauth2/authorize');
oauthURL.search = new URLSearchParams([
    ['redirect_uri', `${BASE_WEB_URL}/oauth/callback`],
    ['response_type', 'code'],
    ['scope', ['identify', 'guilds'].join(' ')],
    ['client_id', CLIENT_ID]
]);