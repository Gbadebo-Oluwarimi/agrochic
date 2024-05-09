import { create } from "zustand";

const Store = (set) => ({
  message: "",
  Status: "",
  updateMessage: (message) => set(() => ({ message: message })),
  updateStatus: (Status) => set(() => ({ Status: Status })),
  popup: false,
  updatepopup: () => set((state) => ({ popup: !state.popup })),
});
export const useStore = create(Store);
