<script setup lang="ts">
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
    <div>
      <h3 class="card-list-title">土地</h3>
      <ul class="card-list">
        <li v-for="land in LANDS" :key="land" class="card-list-item">
          {{ toLandJapanese(land) }}
        </li>
      </ul>
    </div>
    <div>
      <h3 class="card-list-title">ドロー</h3>
      <ul class="card-list">
        <li v-for="land in DRAWS" :key="land" class="card-list-item">
          {{ toDrawJapanese(land) }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.card-list-title {
  @apply text-2xl font-semibold;
}

.card-list {
  @apply bg-white p-3 my-3 rounded;
}

.card-list-item {
  @apply bg-gray-300 rounded border-2 p-1 my-1;
}
</style>
