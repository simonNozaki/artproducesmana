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
  @apply border border-green-700 px-3 py-2 bg-white
  hover:bg-gray-100 focus:outline-none;
}

.button-text {
  @apply font-semibold text-black;
}
</style>
