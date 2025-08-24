import { create } from "zustand";

const useStore = create((set) => ({
    started: false,
    onStart: () => set({ started: true }),
    ringsVisible: true,
    hideRings: () => set({ ringsVisible: false }),
    UiShown: false,
    showUi: () => set({ UiShown: true }),
    currentSection: 'intro',
    setCurrentSection: (section) => set({ currentSection: section })
}));

export default useStore;