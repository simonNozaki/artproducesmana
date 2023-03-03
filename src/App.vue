<script setup lang="ts">
import { RouterView } from "vue-router";
import ApplicationHeader from "./components/ApplicationHeader.vue";
</script>

<template>
  <ApplicationHeader />
  <main class="mt-4">
    <Suspense>
      <RouterView />
    </Suspense>
  </main>
</template>
