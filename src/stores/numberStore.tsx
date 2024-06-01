import { create } from "zustand";

type TnumberSate = {
  num: number;
  increaseNumber: () => void;
  defaultNumber: () => void;
};

export const useNumberStore = create<TnumberSate>()((set) => ({
  // need () in tsx
  num: 0,
  increaseNumber: () => set((state) => ({ num: state.num + 1 })),
  defaultNumber: () => set(() => ({ num: 0 })),
}));
