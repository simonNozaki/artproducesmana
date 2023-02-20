<script setup lang="ts">
import ApplicationTab from "./ApplicationTab.vue";
</script>

<template>
  <div class="flex flex-col">
    <header>
      <div class="m-5 mb-0">
        <h1 class="title">CastAnArt</h1>
        <h2 class="subtitle">Magic: The Gatheringのアート</h2>
      </div>
      <div class="flex justify-center mt-3">
        <ApplicationTab />
      </div>
    </header>
  </div>
</template>

<style>
.title {
  @apply text-4xl font-medium text-gray-600;
}

.subtitle {
  @apply text-base text-gray-500;
}
</style>
