<script setup lang="ts">
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  TransitionRoot,
  TransitionChild,
} from "@headlessui/vue";
import Button from "./atoms/Button.vue";
import ModalClose from "./atoms/ModalClose.vue";
import { createScreen, useScreen } from "@/composables/useScreen";

export interface Props {
  name: string;
  artClop: string | undefined;
  borderClop: string | undefined;
}
defineProps<Props>();

const isOpen = ref(false);

const openArtModal = () => {
  isOpen.value = true;
};
const closeArtModal = () => {
  isOpen.value = false;
};

const { Screen } = useScreen();
const screen = createScreen();
const closeIconSize = ref(36);
screen.addListenerOnResize(() => {
  if (screen.size <= Screen.SCREEN_LARGE) {
    closeIconSize.value = 24;
  } else {
    closeIconSize.value = 36;
  }
});
</script>

<template>
  <img
    :src="artClop"
    alt="forest"
    id="landimage"
    class="land-image"
    @click="openArtModal"
  />
  <TransitionRoot :show="isOpen">
    <Dialog as="div" :open="isOpen" @close="closeArtModal">
      <div
        class="fixed inset-0 bg-black/40 flex justify-center"
        aria-hidden="true"
      >
        <TransitionChild
          enter="duration-[400ms] ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-[400ms] ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogPanel class="dialog-panel flex flex-col">
            <div class="flex justify-end">
              <Button @click="closeArtModal">
                <ModalClose :size="closeIconSize" />
              </Button>
            </div>
            <img
              :src="borderClop"
              alt="forest"
              class="land-full-image mx-auto"
            />
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<style scoped>
.land-image {
  @apply rounded shadow-md cursor-pointer;
}

.land-full-image {
  cursor: pointer;
  @apply p-1 lg:p-5;
}

.dialog-panel {
  @apply m-4 p-2 lg:p-4 rounded-md bg-[#D5D5D5];
}
</style>
