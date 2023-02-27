<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
export interface Props {
  size: string;
}
withDefaults(defineProps<Props>(), {
  size: "24",
});
</script>

<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24">
    <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"></path>
  </svg>
</template>
