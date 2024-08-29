<template>
  <div v-if="athlete" class="bg-white px-10">
    <div class="p-4">
      <ActivityGrid></ActivityGrid>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useAuthStore } from '../stores/authStore';
import ActivityGrid from '../components/ActivityGrid.vue';

const authStore = useAuthStore();
const { athlete } = storeToRefs(authStore);
</script>
