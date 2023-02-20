import { ref } from "vue";

export type ArtModeType = "lands" | "draws";

const artMode = ref<ArtModeType>("lands");

export const useArtMode = () => {
  return {
    artMode: artMode,
  };
};
