<template>
  <nav class="p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-black text-lg font-bold">
        <RouterLink to="/"><img src="/strava_logo_charts.png" alt="logo" class="h-5" /></RouterLink>
      </div>
      <div class="space-x-4">
        <Login />
      </div>
    </div>
  </nav>

  <RouterView />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView, useRouter } from 'vue-router';
import { useAuthStore } from './stores/authStore';
import Login from './components/Login.vue';

const authStore = useAuthStore();
const router = useRouter();

onMounted(async () => {
  await authStore.getAccessToken();
  router.push('/');
});
</script>
