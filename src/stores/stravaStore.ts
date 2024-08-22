import { defineStore } from 'pinia';
import axios from 'axios';

export const useStravaStore = defineStore('strava', {
  state: () => ({
    activities: [] as any[]
  }),
  actions: {
    async getActivities() {
      try {
        const response = await axios.get(`https://www.strava.com/api/v3/athlete/activities`);
        this.activities = response.data;
        console.log('activities! 🚴', this.activities);
      } catch (error) {
        console.log(error);
      }
    }
  }
});
