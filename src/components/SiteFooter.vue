<template>
  <footer className="bg-white text-gray-800 py-6">
    <div className="container mx-auto text-center">
      <div className="mb-2 text-gray-600 text-xs">Built with Vue, Chart.js and Tailwind.</div>
      <div className="text-gray-600 text-xs">
        &copy; {{ year }} Michael Schennum. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const year = computed(() => new Date().getFullYear());
</script>
