import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
  state: () => ({
    currentMode: "light",
  }),
  actions: {
    changeTheme(mode) {
      this.currentMode = mode;
    },
  },
});
