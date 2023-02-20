import { DRAWS } from "@/applications/data/draws";
import { LANDS } from "@/applications/data/lands";
import type { SearchCardResult } from "@/applications/types/search.card.result";
import type { Card as Original } from "scryfall-sdk";
import type { ArtModeType } from "./useArtMode";

// インメモリキャッシュ
const cache = new Map<string, SearchCardResult>();

class Card {
  constructor(private readonly _name: string) {}

  async getByName(): Promise<SearchCardResult> {
    const cacheItem = cache.get(this._name);
    if (cacheItem) {
      return cacheItem;
    }

    const r = (await (
      await fetch(`https://api.scryfall.com/cards/named?exact=${this._name}`)
    ).json()) as Original;
    const card = {
      name: r.name,
      setName: r.set_name,
      artClop: r.image_uris?.art_crop,
      flavorText: r.flavor_text ?? "テキストはありません",
    };
    cache.set(this._name, card);
    return card;
  }
}

const createRandomCard = (artMode: ArtModeType): Card => {
  switch (artMode) {
    case "lands": {
      const index = Math.floor(Math.random() * LANDS.length) + 1;
      return new Card(LANDS[index - 1]);
    }
    case "draws": {
      const index = Math.floor(Math.random() * DRAWS.length) + 1;
      return new Card(DRAWS[index - 1]);
    }
    default:
      throw new Error(`${artMode} に対応するアートセットがありません`);
  }
};

export const useCard = () => {
  return {
    Card: Card,
    createRandomCard: createRandomCard,
  };
};
