<script setup lang="ts">
import { TransitionRoot, Dialog, DialogPanel } from "@headlessui/vue";
import Button from "@/components/atoms/Button.vue";
import ModalClose from "./atoms/ModalClose.vue";
import { RouterLink } from "vue-router";

export interface Emits {
  (e: "close"): () => void;
}
export interface Props {
  isShow: boolean;
}
withDefaults(defineProps<Props>(), {
  isShow: false,
});
const emits = defineEmits<Emits>();

const close = () => {
  emits("close");
};
</script>

<template>
  <TransitionRoot
    :show="isShow"
    enter="transition-opacity duration-75"
    enter-from="opacity-0"
    enter-to="opacity-100"
    leave-from="opacity-100"
    leave-to="opacity-0"
  >
    <Dialog as="div" :open="isShow" @close="close">
      <div
        class="fixed inset-0 bg-black/40 flex justify-end"
        aria-hidden="true"
      >
        <DialogPanel class="navigation-side-bar flex flex-col p-6">
          <div class="flex justify-end">
            <Button @click="close"><ModalClose /></Button>
          </div>
          <ul class="mt-4 md:m-6">
            <li class="navigation-side-bar-link">
              <router-link to="/" @click="close">アート</router-link>
            </li>
            <li class="navigation-side-bar-link">
              <router-link to="cards" @click="close">収録カード</router-link>
            </li>
          </ul>
        </DialogPanel>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<style scoped>
.navigation-side-bar {
  @apply bg-[#D5D5D5] w-2/3 md:w-1/3;
}

.navigation-side-bar-link {
  @apply my-2 underline font-semibold text-base md:text-lg;
}
</style>
