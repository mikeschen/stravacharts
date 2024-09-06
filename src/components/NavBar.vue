<template>
  <nav class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <RouterLink to="/"
              ><img class="h-4 w-auto" src="/scharts_logo_nav.png" alt="S Charts Logo"
            /></RouterLink>
          </div>
          <div class="sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <button
                v-if="athlete"
                class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                aria-current="page"
              >
                Dashboard
              </button>
              <ButtonWrapper
                :label="token ? 'Logout' : 'Login'"
                @action="token ? logout() : login()"
              />
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <button
            type="button"
            class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <span class="absolute -inset-1.5"></span>
            <span class="sr-only">View notifications</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </button>
          <span v-if="athlete" class="text-white text-sm"
            >{{ athlete.firstname }} {{ athlete.lastname }}</span
          >
          <!-- Profile dropdown -->
          <div class="relative ml-3">
            <div>
              <button
                type="button"
                class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span class="absolute -inset-1.5"></span>
                <span class="sr-only">Open user menu</span>
                <img
                  v-if="athlete"
                  class="h-8 w-8 rounded-full"
                  :src="athlete.profile"
                  alt="profile photo of athlete"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import ButtonWrapper from './ButtonWrapper.vue';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/authStore';

const router = useRouter();
const authStore = useAuthStore();
const { token, athlete } = storeToRefs(authStore);

const login = () => {
  const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
  const redirectUrl =
    process.env.NODE_ENV === 'production' ? 'https://scharts.vercel.app' : 'http://localhost:5173';
  const url = `https://www.strava.com/oauth/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${redirectUrl}/exchange_token&approval_prompt=force&scope=read,profile:read_all,activity:read,activity:read_all`;

  window.location.href = url;
};

const logout = () => {
  authStore.reset();
  router.push({ name: 'login' });
};
</script>
