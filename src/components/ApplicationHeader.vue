<script setup lang="ts">
import ApplicationTab from "./ApplicationTab.vue";
</script>

<template>
  <div class="flex flex-col">
    <header class="application-header">
      <div class="grow m-5 mb-0">
        <h1 class="title">CastAnArt</h1>
        <h2 class="subtitle">Magic: The Gatheringのアート</h2>
      </div>
      <div class="flex justify-center">
        <ApplicationTab />
      </div>
    </header>
  </div>
</template>

<style>
.application-header {
  @apply border-b-2 border-gray-100;
}

.title {
  font-family: "MotoyaAporo";
  @apply text-3xl text-blue-600;
}

.subtitle {
  @apply text-base text-gray-500;
}
</style>
