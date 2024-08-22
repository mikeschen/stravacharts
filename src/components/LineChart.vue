<template>
  <div class="bg-orange-200 p-4">
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
  Legend
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

const data = {
  title: 'Custom tooltip',
  labels: props.dates,
  datasets: [
    {
      backgroundColor: '#f87979',
      data: props.results
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
