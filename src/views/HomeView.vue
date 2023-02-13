<script lang="ts" setup>
import Button from "@/components/atoms/Button.vue";
import { useCard } from "@/composables/useCard";
const { Card } = useCard();
const land = await Card.ofRandom().fetchByName();
</script>

<template>
  <Suspense>
    <!-- モバイルで幅をギリギリまで広げる -->
    <div class="container mx-auto w-1/2">
      <div class="flex flex-col justify-center">
        <label for="landimage" class="land-image-label m-2">
          {{ land.name }} - {{ land.setName }}
        </label>
        <img
          :src="land.artClop"
          alt="forest"
          id="landimage"
          class="land-image"
        />
      </div>
      <div class="flex justify-center">
        <Button class="my-10"> 土地をセットする </Button>
      </div>
    </div>
  </Suspense>
</template>

<style>
.land-image {
  @apply rounded-sm shadow-md;
}

.land-image-label {
  @apply font-medium text-lg text-gray-600;
}
</style>
