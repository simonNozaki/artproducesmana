<script lang="ts" setup>
import type { SearchCardResult } from "@/applications/types/search.card.result";
import Button from "@/components/atoms/Button.vue";
import SchevronLeft from "@/components/atoms/SchevronLeft.vue";
import SchevronRight from "@/components/atoms/SchevronRight.vue";
import { useCard } from "@/composables/useCard";
import { useArtMode } from "@/composables/useArtMode";
import { computed, ref } from "vue";
const { createRandomCard } = useCard();
const { artMode } = useArtMode();

let currentCard = ref<SearchCardResult>(
  await createRandomCard(artMode.value).getByName()
);
let screenWidth = ref(window.innerWidth);
window.addEventListener("resize", () => {
  screenWidth.value = window.innerWidth;
});
const screenIsOverMedium = () => {
  return screenWidth.value >= 768;
};

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
  <!-- PCスクリーン以上のサイズでflexboxのdirectionが縦 -> 横になる -->
  <div class="flex flex-col md:flex-row justify-center m-4">
    <!-- 左側 -->
    <div class="grow">
      <div class="flex place-content-center">
        <Button @click="setNewCard" v-if="screenIsOverMedium()">
          <SchevronLeft size="36" />
        </Button>
      </div>
    </div>
    <div class="lg:w-1/2 mb-5">
      <div class="flex flex-col justify-center">
        <label for="landimage" class="land-image-label">
          {{ card.name }} - {{ card.setName }}
        </label>
        <p class="land-text-flavor my-2">{{ card.flavorText }}</p>
        <img
          :src="card.artClop"
          alt="forest"
          id="landimage"
          class="land-image"
        />
      </div>
    </div>
    <!-- 右側 -->
    <div class="grow">
      <div class="flex justify-center">
        <Button @click="setNewCard" v-if="!screenIsOverMedium()" class="mx-3">
          <SchevronLeft size="36" />
        </Button>
        <Button @click="backToPrevious" class="mx-3">
          <SchevronRight size="36" />
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
  @apply text-gray-700 text-base md:text-lg;
}

.land-text-flavor {
  /** モバイルでは特に文字を小さくする */
  @apply italic text-gray-500 text-sm md:text-base;
}
</style>
