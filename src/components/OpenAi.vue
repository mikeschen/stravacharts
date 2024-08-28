<template>
  <div>
    <h1>OpenAI</h1>
    <p>here👍: {{ main() }}</p>
  </div>
</template>

<script setup lang="ts">
import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: import.meta.env.VITE_CLIENT_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

async function main() {
  const chatCompletion = await client.chat.completions.create({
    messages: [{ role: 'user', content: 'Brainstorm some ideas combining VR and fitness.' }],
    model: 'gpt-4o-mini'
  });

  console.log('openai 🚴', chatCompletion);

  return chatCompletion.choices[0].message.content;
}
</script>
