import { create } from "zustand";

type TnumberSate = {
  num: number;
  increaseNumber: () => void;
  defaultNumber: () => void;
  //getOwner: () => Promise<string>;
};

export const useNumberStore = create<TnumberSate>()((set) => ({
  // need () in tsx
  num: 0,
  increaseNumber: () => set((state) => ({ num: state.num + 1 })),
  defaultNumber: () => set(() => ({ num: 0 })),
  // getOwner: async () => {
  //   const response = await fetch("https://api.github.com/users/1");
  //  const owner = await response.json();
  //   console.log(owner.name);
  //   return owner.name;
  // },
}));
