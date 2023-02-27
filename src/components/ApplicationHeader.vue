<script setup lang="ts">
import { ref } from "vue";
import ApplicationTab from "./ApplicationTab.vue";
import GlobalNavigation from "./GlobalNavigation.vue";

const navigationIsOpen = ref(false);

const openNavigation = () => {
  navigationIsOpen.value = true;
};

const closeNavigation = () => {
  navigationIsOpen.value = false;
};
</script>

<template>
  <div class="flex flex-col">
    <header class="m-3 md:m-5 mb-0">
      <div class="flex flex-row justify-between">
        <h1 class="title">
          <svg
            viewBox="0 0 100 100"
            width="20"
            height="20"
            class="title-element"
          >
            <g transform="translate(0 -1)" fill="none">
              <circle fill="#CAC5C0" cx="50" cy="50.998" r="50" />
              <path
                d="M85.332 59.918h-36.004l13.185-9.383c-4.898-3.887-10.566-5.828-16.984-5.828-3.211 0-5.414.613-6.59 1.836-1.184 1.227-1.777 3.445-1.777 6.654 0 8.873 4.563 18.34 13.691 28.396l-10.391 10.521c-12.09-14.705-18.129-27.844-18.129-39.424 0-6.928 2.086-12.447 6.27-16.545 4.18-4.098 9.746-6.148 16.668-6.148 8.453 0 17.664 3.215 27.641 9.635l7.728-13.182 4.692 33.468z"
                fill="#0D0F0F"
              />
            </g>
          </svg>
          <p class="title-element mx-1">CastAnArt</p>
        </h1>
        <button class="flex justify-end" @click="openNavigation">
          <svg :width="36" :height="36" viewBox="0 0 24 24">
            <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"></path>
          </svg>
        </button>
      </div>
      <GlobalNavigation :isShow="navigationIsOpen" @close="closeNavigation" />
      <h2 class="subtitle">Magic: The Gatheringのアート</h2>
    </header>
  </div>
</template>

<style scoped>
.title {
  @apply text-3xl font-bold text-black;
}

.subtitle {
  @apply text-base text-gray-700;
}

.title-element {
  display: inline-block;
  vertical-align: baseline;
}

.title p {
  @apply bg-white px-1;
}
</style>
