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
  @apply
    rounded-md shadow-sm border px-4 py-2 bg-blue-500
    hover:shadow-md
    font-medium;
}

.button-text {
  @apply font-medium text-white;
}
</style>
