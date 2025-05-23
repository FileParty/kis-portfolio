import { StateCreator } from 'zustand';
import { ThemeState, ThemeAction } from "~/entities/theme/model/types";

export const createThemeSlice: StateCreator<
  ThemeState,
  [],
  [],
  ThemeState & ThemeAction
> = (set, get) => ({
  isDarkMode: false,
  toggleDarkMode: () => set((state: ThemeState) => ({ isDarkMode: !state.isDarkMode })),
});