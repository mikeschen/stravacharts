<template>
  <div>
    <button
      class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
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
  window.location = `http://www.strava.com/oauth/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${redirectUrl}/exchange_token&approval_prompt=force&scope=read,profile:read_all,activity:read,activity:read_all` as unknown as Location;
};
</script>
