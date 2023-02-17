<script lang="ts" setup>
import type { SearchCardResult } from "@/applications/types/search.card.result";
import Button from "@/components/atoms/Button.vue";
import FormatQuoteOpen from "vue-material-design-icons/FormatQuoteOpen.vue";
import { useCard } from "@/composables/useCard";
import { computed, ref } from "vue";
const { Card } = useCard();
let land = ref<SearchCardResult>(await Card.ofRandom().fetchByName());
let previous: SearchCardResult | null | undefined;

const setNewCard = async () => {
  previous = card.value;
  card.value = await Card.ofRandom().fetchByName();
};

const backToPrevious = () => {
  if (previous) {
    card.value = previous;
  }
};

const card = computed<SearchCardResult>({
  get: () => land.value,
  set: (result: SearchCardResult) => {
    land.value = result;
  },
});
</script>

<template>
  <div class="container mx-auto w-full p-3 lg:w-1/2">
    <div class="flex flex-col justify-center">
      <label for="landimage" class="land-image-label m-2">
        {{ card.name }} - {{ land.setName }}
      </label>
      <img :src="land.artClop" alt="forest" id="landimage" class="land-image" />
      <div class="mt-3">
        <FormatQuoteOpen />
        <p class="mx-auto land-text-flavor">{{ card.flavorText }}</p>
      </div>
    </div>
    <div class="flex justify-center items-center sm:flex-col">
      <div class="my-10">
        <Button :click="setNewCard"> 土地をセットする </Button>
        <Button class="m-3" v-if="previous" :click="backToPrevious">
          前に戻る
        </Button>
      </div>
    </div>
  </div>
</template>

<style>
.land-image {
  @apply rounded-sm shadow-md;
}

.land-image-label {
  /** モバイルでは特に文字を小さくする */
  @apply text-lg text-gray-500 text-sm md:text-base;
}

.land-text-flavor {
  /** モバイルでは特に文字を小さくする */
  @apply italic text-gray-600 text-sm md:text-base;
}
</style>
