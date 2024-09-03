<template>
  <div>
    <button
      class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
      @click="$emit('action')"
    >
      <slot>{{ label }}</slot>
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps({
  label: String
});
defineEmits(['action']);
</script>
