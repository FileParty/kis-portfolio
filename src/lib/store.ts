import { create } from "zustand";
import { createThemeSlice } from "~/entities/theme/model/store";
import { MainStore } from "~/lib/type";

const useStore = create<MainStore>()((...args) => ({
  ...createThemeSlice(...args),
}));

export default useStore;
