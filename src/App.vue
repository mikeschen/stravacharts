<template>
  <nav class="p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-black text-lg font-bold">
        <RouterLink to="/"><img src="/strava_logo_charts.png" alt="logo" class="h-5" /></RouterLink>
      </div>
      <div v-if="athlete" class="relative flex">
        <img class="h-16 object-cover" :src="athlete.profile" alt="Header Image" />
        <div class="absolute bottom-0 left-0 right-0 p-4">
          <h2 class="text-white text-sm font-bold">
            {{ athlete.firstname }} {{ athlete.lastname }}
          </h2>
        </div>
      </div>
      <Login />
    </div>
  </nav>

  <RouterView />
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { RouterView, useRouter } from 'vue-router';
import { useAuthStore } from './stores/authStore';
import Login from './components/Login.vue';

const authStore = useAuthStore();
const router = useRouter();
const { athlete } = storeToRefs(authStore);

onMounted(async () => {
  await authStore.getAccessToken();
  router.push('/');
});
</script>
