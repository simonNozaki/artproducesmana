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
    <path
      d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
    ></path>
  </svg>
</template>
