<script lang="ts" setup>
import type { SearchCardResult } from "@/applications/types/search.card.result";
import Button from "@/components/atoms/Button.vue";
import FormatQuoteOpen from "vue-material-design-icons/FormatQuoteOpen.vue";
import { useCard } from "@/composables/useCard";
import { useArtMode } from "@/composables/useArtMode";
import { computed, ref } from "vue";
const { createRandomCard } = useCard();
const { artMode } = useArtMode();

let currentCard = ref<SearchCardResult>(
  await createRandomCard(artMode.value).getByName()
);
const buttonText = computed(() => {
  switch (artMode.value) {
    case "lands":
      return "土地をセットする";
    case "draws":
      return "カードを引く";
    default:
      return "カードをプレイする";
  }
});
let cardHistories: SearchCardResult[] = [];
let current = 0;

const setNewCard = async () => {
  card.value = await createRandomCard(artMode.value).getByName();
  // 履歴を積みすぎるとバッファを使いすぎるので適度にリフレッシュ
  if (cardHistories.length > 50) {
    cardHistories = [];
    current = 0;
  }
  cardHistories.push(card.value);
  current++;
};

const backToPrevious = () => {
  if (cardHistories.length > 0) {
    current--;
    card.value = cardHistories[current];
  }
};

const card = computed<SearchCardResult>({
  get: () => currentCard.value,
  set: (result: SearchCardResult) => {
    currentCard.value = result;
  },
});
</script>

<template>
  <div class="container mx-auto w-full p-3 lg:w-1/2">
    <div class="flex flex-col justify-center">
      <label for="landimage" class="land-image-label m-2">
        {{ card.name }} - {{ card.setName }}
      </label>
      <img :src="card.artClop" alt="forest" id="landimage" class="land-image" />
      <div class="mt-3">
        <FormatQuoteOpen />
        <p class="mx-auto land-text-flavor">{{ card.flavorText }}</p>
      </div>
    </div>
    <div class="flex justify-center items-center sm:flex-col">
      <div class="my-10">
        <Button :click="setNewCard"> {{ buttonText }} </Button>
        <Button class="m-3" v-if="current" :click="backToPrevious">
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
  @apply text-gray-500 text-sm md:text-base;
}

.land-text-flavor {
  /** モバイルでは特に文字を小さくする */
  @apply italic text-gray-600 text-sm md:text-base;
}
</style>
