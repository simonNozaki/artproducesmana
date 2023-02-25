class Screen {
  static SCREEN_LARGE = 1024;

  private _size: number;
  constructor(readonly _screenSize: number) {
    this._size = _screenSize;
    window.addEventListener("resize", () => {
      this._size = window.innerWidth;
    });
  }

  addListenerOnResize(f: (uiEvent?: UIEvent) => void): void {
    window.addEventListener("resize", f);
  }

  get size(): number {
    return this._size;
  }
}

export const createScreen = () => {
  return new Screen(window.innerWidth);
};

export const useScreen = () => {
  return {
    Screen: Screen,
    createScreen,
  };
};
