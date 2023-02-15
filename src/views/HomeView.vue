<script lang="ts" setup>
import type { SearchCardResult } from "@/applications/types/search.card.result";
import Button from "@/components/atoms/Button.vue";
import { useCard } from "@/composables/useCard";
import { computed, ref } from "vue";
const { Card } = useCard();
let land = ref<SearchCardResult>({
  name: "",
  setName: "",
  // TODO: 初期表示用の空の写真用意しておく
  artClop: "",
});

const setNewCard = async () => {
  card.value = await Card.ofRandom().fetchByName();
};

const card = computed<SearchCardResult>({
  get: () => land.value,
  set: (result: SearchCardResult) => {
    land.value = result;
  },
});
</script>

<template>
  <!-- モバイルで幅をギリギリまで広げる -->
  <div class="container mx-auto w-1/2">
    <div class="flex flex-col justify-center">
      <label for="landimage" class="land-image-label m-2">
        {{ card.name }} - {{ land.setName }}
      </label>
      <img :src="land.artClop" alt="forest" id="landimage" class="land-image" />
    </div>
    <div class="flex justify-center">
      <Button class="my-10" :click="setNewCard"> 土地をセットする </Button>
    </div>
  </div>
</template>

<style>
.land-image {
  @apply rounded-sm shadow-md;
}

.land-image-label {
  @apply font-medium text-lg text-gray-600;
}
</style>
