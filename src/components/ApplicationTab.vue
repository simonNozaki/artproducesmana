<script lang="ts" setup>
import { TabGroup, TabList, Tab } from "@headlessui/vue";
import { useArtMode } from "@/composables/useArtMode";
const { artMode } = useArtMode();
</script>

<template>
  <div class="flex justify-center my-2">
    <TabGroup class="border-gray-200">
      <TabList class="tab-list">
        <Tab class="mx-1" v-slot="{ selected }">
          <button
            class="tab-button"
            :class="[selected ? 'border-black' : 'border-gray-300']"
            @click="artMode = 'lands'"
          >
            土地
          </button>
        </Tab>
        <Tab class="mx-1" v-slot="{ selected }">
          <button
            class="tab-button"
            :class="[selected ? 'border-black' : 'border-gray-300']"
            @click="artMode = 'draws'"
          >
            青のドロー
          </button>
        </Tab>
      </TabList>
    </TabGroup>
  </div>
</template>

<style scoped>
.tab-list {
  @apply border-gray-200;
}

.tab-button {
  @apply border-b-2 px-4 py-2
  hover:bg-gray-50
    font-medium text-gray-500;
}
</style>
