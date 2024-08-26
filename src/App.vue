<template>
  <NavBar />
  <RouterView />
  <SiteFooter />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView, useRouter } from 'vue-router';
import { useAuthStore } from './stores/authStore';
import NavBar from './components/NavBar.vue';
import SiteFooter from './components/SiteFooter.vue';

const authStore = useAuthStore();
const router = useRouter();

onMounted(async () => {
  await authStore.getAccessToken();
  router.push('/');
});
</script>
