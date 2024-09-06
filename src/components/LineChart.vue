<template>
  <div class="bg-orange-100 p-4">
    <Line :data="data" :options="options" />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
	type ChartData,
} from 'chart.js';
import { Line } from 'vue-chartjs';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  dates: {
    type: Array,
    required: true
  },
  results: {
    type: Array,
    required: true
  }
});

const data: ChartData<'line', number[], string> = {
  labels: props.dates as string[],
  datasets: [
    {
      backgroundColor: '#f87979',
      data: props.results as number[]
    }
  ]
};

const options = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: { display: false },
    title: {
      display: true,
      text: props.title
    }
  }
};
</script>
