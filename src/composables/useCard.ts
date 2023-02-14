import type { Card as Original } from "scryfall-sdk";

export interface SearchCardResult {
  name: string;
  setName: string;
  artClop: string | undefined;
}

class Card {
  private static readonly lands = [
    "island",
    "forest",
    "mountain",
    "swamp",
    "plain",
  ];

  constructor(private _landName: string) {}

  static ofRandom(): Card {
    // TODO: ここでランダム化
    return new Card(this.lands[0]);
  }

  async fetchByName(): Promise<SearchCardResult> {
    const r = (await (
      await fetch(
        `https://api.scryfall.com/cards/named?exact=${this._landName}`
      )
    ).json()) as Original;
    console.log(r);
    const res = {
      name: r.name,
      setName: r.set_name,
      artClop: r.image_uris?.art_crop,
    };
    console.log(res);
    return res;
  }
}

export const useCard = () => {
  return {
    Card: Card,
  };
};
