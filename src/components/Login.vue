<template>
  <div>
    <button
      class="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
      @click="login"
    >
      Login
    </button>
  </div>
</template>

<script setup lang="ts">
const login = () => {
  const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
  const redirectUrl = 'http://localhost:5173';
  window.location = `http://www.strava.com/oauth/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${redirectUrl}/exchange_token&approval_prompt=force&scope=read,profile:read_all,activity:read,activity:read_all`;
};
</script>
