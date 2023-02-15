import { LANDS } from "@/applications/data/lands";
import type { SearchCardResult } from "@/applications/types/search.card.result";
import type { Card as Original } from "scryfall-sdk";

class Card {
  constructor(private _landName: string) {}

  static ofRandom(): Card {
    const index = Math.floor(Math.random() * LANDS.length) + 1;
    return new Card(LANDS[index - 1]);
  }

  async fetchByName(): Promise<SearchCardResult> {
    const r = (await (
      await fetch(
        `https://api.scryfall.com/cards/named?exact=${this._landName}`
      )
    ).json()) as Original;
    return {
      name: r.name,
      setName: r.set_name,
      artClop: r.image_uris?.art_crop,
    };
  }
}

export const useCard = () => {
  return {
    Card: Card,
  };
};
