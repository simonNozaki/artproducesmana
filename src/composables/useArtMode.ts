import { ref } from "vue";

export type ArtModeType = "lands" | "draws";

export const useArtMode = () => {
  return {
    artMode: ref<ArtModeType>("lands"),
  };
};
