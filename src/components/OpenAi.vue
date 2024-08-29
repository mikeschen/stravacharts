<template>
  <p class="text-sm pb-4">Today's Training Tip: {{ chatCompletion.choices[0].message.content }}</p>
</template>

<script setup lang="ts">
import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: import.meta.env.VITE_CLIENT_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

const chatCompletion = await client.chat.completions.create({
  messages: [
    { role: 'user', content: 'Brainstorm some ideas for fitness. Limit it to two sentences' }
  ],
  model: 'gpt-4o-mini'
});
</script>
