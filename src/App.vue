<template>
  <NavBar />
  <RouterView />
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { RouterView, useRouter } from 'vue-router';
import { useAuthStore } from './stores/authStore';
import Login from './components/Login.vue';
import NavBar from './components/NavBar.vue';

const authStore = useAuthStore();
const router = useRouter();
const { athlete } = storeToRefs(authStore);

onMounted(async () => {
  await authStore.getAccessToken();
  router.push('/');
});
</script>
