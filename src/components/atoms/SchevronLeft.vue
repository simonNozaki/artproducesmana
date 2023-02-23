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
      d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
    ></path>
  </svg>
</template>
