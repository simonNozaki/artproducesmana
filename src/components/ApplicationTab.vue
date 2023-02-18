<script lang="ts" setup>
import { TabGroup, TabList, Tab } from "@headlessui/vue";
import SecondaryButton from "./atoms/SecondaryButton.vue";
</script>

<template>
  <div class="flex justify-center my-2">
    <TabGroup class="border-gray-200">
      <TabList class="tab-list">
        <Tab class="mx-1" v-slot="{ selected }">
          <SecondaryButton :class="[selected ? 'bg-blue-100' : 'bg-white']">
            土地
          </SecondaryButton>
        </Tab>
        <Tab class="mx-1" v-slot="{ selected }">
          <SecondaryButton :class="[selected ? 'bg-blue-100' : 'bg-white']">
            ドロー系
          </SecondaryButton>
        </Tab>
      </TabList>
    </TabGroup>
  </div>
</template>

<style scoped>
.tab-list {
  @apply border-gray-200;
}
</style>
