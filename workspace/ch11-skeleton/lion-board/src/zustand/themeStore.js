import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware';

const ThemeStore = (set) => ({
  isDarkMode: window.matchMedia('prefers-color-scheme: dark').matches ? true : false,
  toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
});

const useThemeStore = create(persist(ThemeStore, {
  name: 'themeStore', // 기본이 로컬스토리지
}));

export default useThemeStore;