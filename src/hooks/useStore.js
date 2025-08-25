import { create } from "zustand";

const useStore = create((set) => ({
  started: false,
  onStart: () => set({ started: true }),
  ringsVisible: true,
  hideRings: () => set({ ringsVisible: false }),
  UiShown: false,
  showUi: () => set({ UiShown: true }),
  sectionProgress: {},
  currentSection: "intro",
  setCurrentSection: (section) => set({ currentSection: section }),
  setSectionProgress: (id, progress) =>
    set((state) => {
      const updated = { ...state.sectionProgress, [id]: progress };
      const active = Object.entries(updated).reduce((a, b) =>
        Math.abs(a[1] - 0.5) < Math.abs(b[1] - 0.5) ? a : b
      )[0];

      return { sectionProgress: updated, currentSection: active };
    }),
}));

export default useStore;
