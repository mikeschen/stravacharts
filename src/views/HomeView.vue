<template>
  <div class="bg-white pl-10">
    <div v-if="athlete" class="relative flex">
      <img class="h-26 object-cover" :src="athlete.profile" alt="Header Image" />
      <div class="absolute bottom-0 left-0 right-0 p-4">
        <h2 class="text-white text-md font-bold">{{ athlete.firstname }} {{ athlete.lastname }}</h2>
      </div>
    </div>
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
