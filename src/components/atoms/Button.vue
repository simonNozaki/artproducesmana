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
  <button class="button">
    <span class="button-text">
      <slot></slot>
    </span>
  </button>
</template>

<style scoped>
.button {
  @apply
    rounded-md shadow-sm border px-4 py-2 bg-indigo-200
    hover:bg-indigo-300
    font-medium;
}

.button-text {
  @apply font-medium text-indigo-800;
}
</style>
