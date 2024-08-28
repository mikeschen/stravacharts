import { defineStore } from 'pinia';
import axios from 'axios';
import { getAuthTokenFromUrl } from '../helpers';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null as string | null,
    athlete: null as any | null
  }),
  actions: {
    async getAccessToken() {

      // Uncomment below for dev use:
      // const accessToken = window.localStorage.getItem('access_token');
      // if (accessToken) {
      //   axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      // } else {
      const authToken = getAuthTokenFromUrl();
      try {
        const authResponse = await axios.post(`https://www.strava.com/api/v3/oauth/token`, null, {
          params: {
            client_id: import.meta.env.VITE_CLIENT_ID,
            client_secret: import.meta.env.VITE_CLIENT_SECRET,
            code: authToken,
            grant_type: 'authorization_code'
          }
        });
        const responseData = authResponse.data;
        window.localStorage.setItem('access_token', responseData.access_token);
        this.token = responseData.access_token;
        axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
        this.athlete = responseData.athlete;
      } catch (error) {
        console.log(error);
      }
    }
  }
});
