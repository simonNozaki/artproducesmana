<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import Plus from "@/components/atoms/Plus.vue";
import Minus from "@/components/atoms/Minus.vue";
import { LANDS } from "@/applications/data/lands";
import { DRAWS } from "@/applications/data/draws";
import landsJa from "@/applications/data/locale/ja/lands.json";
import drawJa from "@/applications/data/locale/ja/draws.json";

/**
 * ロケールJSONパース用の型。そんなにキレイな解決ではない。
 */
interface LocalCardName {
  [key: string]: string;
}

const toLandJapanese = (name: string) => {
  return (landsJa as LocalCardName)[name];
};
const toDrawJapanese = (name: string) => {
  return (drawJa as LocalCardName)[name];
};
</script>

<template>
  <div class="flex flex-col justify-center m-3 md:m-6">
    <Disclosure v-slot="{ open }">
      <DisclosureButton class="toggle-button my-1">
        <div class="flex flex-row my-2">
          <h3 class="card-list-title flex justify-start grow">土地</h3>
          <div class="flex justify-end">
            <Plus v-if="!open" />
            <Minus v-if="open" />
          </div>
        </div>
      </DisclosureButton>
      <DisclosurePanel>
        <ul class="card-list">
          <li v-for="land in LANDS" :key="land" class="card-list-item">
            {{ toLandJapanese(land) }}
          </li>
        </ul>
      </DisclosurePanel>
    </Disclosure>
    <Disclosure>
      <DisclosureButton v-slot="{ open }" class="toggle-button my-1">
        <div class="flex flex-row my-2">
          <h3 class="card-list-title flex justify-start grow">ドロー</h3>
          <div class="flex justify-end">
            <Plus v-if="!open" />
            <Minus v-if="open" />
          </div>
        </div>
      </DisclosureButton>
      <DisclosurePanel>
        <ul class="card-list">
          <li v-for="land in DRAWS" :key="land" class="card-list-item">
            {{ toDrawJapanese(land) }}
          </li>
        </ul>
      </DisclosurePanel>
    </Disclosure>
  </div>
</template>

<style scoped>
.card-list-title {
  @apply text-2xl font-semibold;
}

.card-list {
  @apply my-3;
}

.card-list-item {
  @apply rounded border border-gray-500 text-gray-700 p-1 my-1;
}

.toggle-button {
  @apply border rounded border-green-700 px-2 py-2 bg-white
  hover:bg-gray-100 focus:outline-none
  font-semibold text-black;
}
</style>
