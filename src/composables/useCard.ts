import { DRAWS } from "@/applications/data/draws";
import { LANDS } from "@/applications/data/lands";
import type { SearchCardResult } from "@/applications/types/search.card.result";
import type { Card as Original } from "scryfall-sdk";
import type { ArtModeType } from "./useArtMode";

class Card {
  constructor(
    private readonly _artMode: ArtModeType,
    private readonly _name?: string
  ) {}

  ofRandom(): Card {
    switch (this._artMode) {
      case "lands": {
        const index = Math.floor(Math.random() * LANDS.length) + 1;
        return new Card(this._artMode, LANDS[index - 1]);
      }
      case "draws": {
        const index = Math.floor(Math.random() * DRAWS.length) + 1;
        return new Card(this._artMode, DRAWS[index - 1]);
      }
      default:
        throw new Error(`${this._artMode} に対応するアートセットがありません`);
    }
  }

  async fetchByName(): Promise<SearchCardResult> {
    const r = (await (
      await fetch(`https://api.scryfall.com/cards/named?exact=${this._name}`)
    ).json()) as Original;
    return {
      name: r.name,
      setName: r.set_name,
      artClop: r.image_uris?.art_crop,
      flavorText: r.flavor_text ?? "テキストはありません",
    };
  }
}

export const useCard = () => {
  return {
    Card: Card,
  };
};
