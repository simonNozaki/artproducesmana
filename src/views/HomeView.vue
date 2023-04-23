<script lang="ts" setup>
import type { SearchCardResult } from "@/applications/types/search.card.result";
import Button from "@/components/atoms/Button.vue";
import SchevronLeft from "@/components/atoms/SchevronLeft.vue";
import SchevronRight from "@/components/atoms/SchevronRight.vue";
import ArtFocusModal from "@/components/ArtFocusModal.vue";
import ApplicationTab from "@/components/ApplicationTab.vue";
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
  <ApplicationTab />
  <!-- PCスクリーン以上のサイズでflexboxのdirectionが縦 -> 横になる -->
  <div class="flex flex-col md:flex-row justify-center m-3 md:m-6">
    <!-- 左側 -->
    <div class="grow">
      <div class="flex place-content-center art-back-button">
        <Button
          @click="backToPrevious"
          v-if="screenIsOverMedium()"
          size="small"
        >
          <div class="inline-block align-middle">
            <SchevronLeft size="36" />
          </div>
          <span class="align-middle">戻る</span>
        </Button>
      </div>
    </div>
    <div class="lg:w-1/2 mb-5">
      <div class="flex flex-col justify-center">
        <label for="landimage" class="land-image-label">
          {{ card.name }}
        </label>
        <p class="land-image-expantion">{{ card.setName }}</p>
        <p class="land-text-flavor my-2">{{ card.flavorText }}</p>
        <ArtFocusModal
          :name="card.name"
          :art-clop="card.artClop"
          :border-clop="card.borderClop"
        />
      </div>
    </div>
    <!-- 右側 -->
    <div class="grow">
      <div class="flex justify-center">
        <!-- 画面幅がタブレット以下ではカード更新ボタンを下に設置する -->
        <div class="art-back-button mr-3">
          <Button
            @click="setNewCard"
            v-if="!screenIsOverMedium()"
            class="mx-2"
            size="small"
          >
            <div class="inline-block align-middle">
              <SchevronLeft size="36" />
            </div>
            <span class="align-middle">戻る</span>
          </Button>
        </div>
        <div class="art-forward-button">
          <Button @click="setNewCard" size="small">
            <span class="align-middle">次へ</span>
            <div class="inline-block align-middle">
              <SchevronRight size="36" />
            </div>
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.land-image-label {
  /** モバイルでは特に文字を小さくする */
  @apply text-gray-700 text-lg md:text-2xl font-semibold;
}

.land-image-expantion {
  @apply text-gray-700 text-base md:text-lg font-medium;
}

.land-text-flavor {
  /** モバイルでは特に文字を小さくする */
  @apply italic text-gray-500 text-sm md:text-base;
}
</style>
