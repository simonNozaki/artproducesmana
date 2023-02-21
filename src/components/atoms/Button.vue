<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
export interface Props {
  click: () => void;
}

withDefaults(defineProps<Props>(), {
  click: () => {},
});
</script>

<template>
  <button class="button" @click="click">
    <span class="button-text">
      <slot></slot>
    </span>
  </button>
</template>

<style scoped>
.button {
  @apply border border-green-700 px-6 py-4 bg-white
  hover:bg-gray-100;
}

.button-text {
  @apply font-medium text-black;
}
</style>
