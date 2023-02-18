<script lang="ts" setup>
interface Emits {
  (e: "click"): void;
}

const emit = defineEmits<Emits>();
</script>

<template>
  <button class="button" @click="emit('click')">
    <span class="button-text">
      <slot></slot>
    </span>
  </button>
</template>

<style scoped>
.button {
  @apply rounded-md shadow-sm border border-slate-200 px-4 py-2
    hover:shadow-md
    font-medium;
}

.button-text {
  @apply font-medium text-gray-500;
}
</style>
