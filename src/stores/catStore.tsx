import { create } from "zustand";

type TCatStoreState = {
  cats: {
    bigCats: number;
    smallCats: number;
  };
  increaseBigCats: () => void;
  increaseSmallCats: () => void;
  summary: () => void;
};

export const useCatStore = create<TCatStoreState>()((set, get) => ({
  cats: {
    bigCats: 0,
    smallCats: 0,
  },
  increaseBigCats: () =>
    set((state) => ({
      cats: { ...state.cats, bigCats: state.cats.bigCats + 1 },
    })),
  increaseSmallCats: () =>
    set((state) => ({
      cats: { ...state.cats, smallCats: state.cats.smallCats + 1 },
    })),
  summary: () => {
    const total = get().cats.bigCats + get().cats.smallCats;
    return `There are ${total} cats in total. `;
  },
}));
