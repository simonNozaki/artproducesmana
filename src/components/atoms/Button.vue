<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import { computed } from "vue";

export type ButtonSize = "small" | "medium";
export type ButtonStyleOrder = "primary" | "secondary";

export interface Props {
  click: () => void;
  order?: ButtonStyleOrder;
  size?: ButtonSize;
}

const props = withDefaults(defineProps<Props>(), {
  click: () => {},
});

const classes = computed(() => ({
  [props.order ? props.order : "primary"]: true,
  [props.size ? props.size : "medium"]: true,
}));
</script>

<template>
  <button :class="classes" @click="click">
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  @apply rounded m-0;
}

.primary {
  @apply font-semibold border border-green-700 bg-white hover:bg-gray-100;
}

.secondary {
  @apply bg-gray-100 text-stone-800 hover:bg-gray-50 border-0;
}

.medium {
  @apply px-3 py-2;
}

.small {
  @apply px-2 py-1;
}
</style>
