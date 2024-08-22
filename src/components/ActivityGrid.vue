<template>
  <div v-if="activities.length > 0" class="grid md:grid-cols-2 grid-cols-1 gap-4">
    <LineChart title="Distance 🚴" :dates="getDates" :results="getData('distance')" />
    <LineChart
      title="Total Elevation Gain ⛰️"
      :dates="getDates"
      :results="getData('total_elevation_gain')"
    />
    <LineChart
      title="Achievement Count 🏅"
      :dates="getDates"
      :results="getData('achievement_count')"
    />
    <LineChart title="Relative Effort 🥵" :dates="getDates" :results="getData('suffer_score')" />
    <LineChart title="Moving Time ⏳" :dates="getDates" :results="getData('moving_time')" />
    <LineChart title="PR Count 🥇" :dates="getDates" :results="getData('pr_count')" />
    <LineChart title="Average Speed ⏱️" :dates="getDates" :results="getData('average_speed')" />
    <LineChart title="Max Speed 💨" :dates="getDates" :results="getData('max_speed')" />
    <LineChart
      title="Average Heart Rate 🫀"
      :dates="getDates"
      :results="getData('average_heartrate')"
    />
    <LineChart title="Max Heart Rate 💗" :dates="getDates" :results="getData('max_heartrate')" />

    <div class="bg-orange-200 p-4">Achievement Count 🏅: {{ activities[0].achievement_count }}</div>
    <div class="bg-orange-200 p-4">
      Average Heart Rate 🫀: {{ activities[0].average_heartrate }} BPM
    </div>
    <div class="bg-orange-200 p-4">
      Average Speed ⏱️: {{ metersPerSecondToMph(activities[0].average_speed) }} MPH
    </div>
    <div class="bg-orange-200 p-4">
      Distance 🚴: {{ convertMetersToMiles(activities[0].distance) }} Miles
    </div>
    <div class="bg-orange-200 p-4">Max Heart Rate 💗: {{ activities[0].max_heartrate }} BPM</div>
    <div class="bg-orange-200 p-4">
      Max Speed 💨: {{ metersPerSecondToMph(activities[0].max_speed) }} MPH
    </div>
    <div class="bg-orange-200 p-4">
      Moving Time ⏳: {{ convertSecondsToMinutesAndSeconds(activities[0].moving_time) }}
    </div>
    <div class="bg-orange-200 p-4">PR Count 🥇: {{ activities[0].pr_count }}</div>
    <div class="bg-orange-200 p-4">Relative Effort 🥵: {{ activities[0].suffer_score }}</div>
    <div class="bg-orange-200 p-4">
      Total Elevation Gain ⛰️: {{ metersToFeet(activities[0].total_elevation_gain) }} FT
    </div>
    <div class="bg-orange-200 p-4">Average Watts 🔋: {{ activities[0].average_watts }}</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useStravaStore } from '../stores/stravaStore';
import {
  convertSecondsToMinutesAndSeconds,
  convertMetersToMiles,
  metersPerSecondToMph,
  metersToFeet,
  formatDate
} from '../helpers';
import LineChart from './LineChart.vue';

const stravaStore = useStravaStore();
const { activities } = storeToRefs(stravaStore);

onMounted(async () => {
  await stravaStore.getActivities();
});

const getDates = computed(() => {
  return activities.value
    .map((activity) => {
      return formatDate(activity['start_date']);
    })
    .reverse();
});

function getData(key: string) {
  const results = activities.value
    .map((activity) => {
      return activity[key];
    })
    .reverse();

  return results;
}
</script>
