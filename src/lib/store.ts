import { create } from "zustand";

const useStore = create((set) => ({
    isDarkMode: false,
    toggleDarkMode: () => set((state: { isDarkMode: boolean }) => ({ isDarkMode: !state.isDarkMode })),
}))

export default useStore;