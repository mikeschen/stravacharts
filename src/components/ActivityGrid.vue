<template>
  <div v-if="!activities.length" class="container mx-auto">
    <div class="flex flex-col md:flex-row">
      <div class="w-full md:w-1/2 p-4">
        <LoadingSkeleton></LoadingSkeleton>
      </div>
      <div class="w-full md:w-1/2 p-4">
        <LoadingSkeleton></LoadingSkeleton>
      </div>
    </div>
  </div>
  <div v-else>
    <Suspense>
      <OpenAi></OpenAi>
      <template #fallback>
        <LoadingSkeleton></LoadingSkeleton>
      </template>
    </Suspense>
    <div class="grid md:grid-cols-2 grid-cols-1 gap-4">
      <LineChart
        title="Distance 🚴 in Miles"
        :dates="getDates"
        :results="getData('distance', convertMetersToMiles)"
      />
      <LineChart
        title="Total Elevation Gain ⛰️ in FT"
        :dates="getDates"
        :results="getData('total_elevation_gain', metersToFeet)"
      />
      <LineChart
        title="Achievement Count 🏅"
        :dates="getDates"
        :results="getData('achievement_count')"
      />
      <LineChart title="PR Count 🥇" :dates="getDates" :results="getData('pr_count')" />
      <LineChart title="Relative Effort 🥵" :dates="getDates" :results="getData('suffer_score')" />
      <LineChart
        title="Moving Time ⏳ in Minutes"
        :dates="getDates"
        :results="getData('moving_time', convertSecondsToMinutes)"
      />
      <LineChart
        title="Average Speed ⏱️ in MPH"
        :dates="getDates"
        :results="getData('average_speed', metersPerSecondToMph)"
      />
      <LineChart
        title="Max Speed 💨 in MPH"
        :dates="getDates"
        :results="getData('max_speed', metersPerSecondToMph)"
      />
      <LineChart
        title="Average Heart Rate 🫀 in BPM"
        :dates="getDates"
        :results="getData('average_heartrate')"
      />
      <LineChart
        title="Max Heart Rate 💗 in BPM"
        :dates="getDates"
        :results="getData('max_heartrate')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useStravaStore } from '../stores/stravaStore';
import {
  convertSecondsToMinutes,
  convertMetersToMiles,
  metersPerSecondToMph,
  metersToFeet,
  formatDate
} from '../helpers';
import LineChart from './LineChart.vue';
import OpenAi from './OpenAi.vue';
import LoadingSkeleton from './LoadingSkeleton.vue';

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

function getData(key: string, formatter = (value: any) => value) {
  const results = activities.value
    .map((activity) => {
      return formatter(activity[key]);
    })
    .reverse();

  return results;
}
</script>
