<script lang="ts" setup>
import type { SearchCardResult } from "@/applications/types/search.card.result";
import Button from "@/components/atoms/Button.vue";
import { useCard } from "@/composables/useCard";
import { computed, ref } from "vue";
const { Card } = useCard();
let land = ref<SearchCardResult>(await Card.ofRandom().fetchByName());
let previous: SearchCardResult = {
  name: "",
  setName: "",
  artClop: "",
  flavorText: "",
};

const setNewCard = async () => {
  previous = card.value;
  card.value = await Card.ofRandom().fetchByName();
};

const setPrevious = () => {
  card.value = previous;
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
      <P class="mx-auto mt-3 land-text-flavor"> {{ card.flavorText }} </P>
    </div>
    <div class="flex justify-center">
      <!-- TODO: 一つ前のカードに戻れるボタン -->
      <Button class="my-10" :click="setNewCard"> 土地をセットする </Button>
      <Button class="my-10 mx-3" :click="setPrevious"> 前に戻る </Button>
    </div>
  </div>
</template>

<style>
.land-image {
  @apply rounded-sm shadow-md;
}

.land-image-label {
  @apply text-lg text-gray-500;
}

.land-text-flavor {
  @apply italic text-gray-600;
}
</style>
