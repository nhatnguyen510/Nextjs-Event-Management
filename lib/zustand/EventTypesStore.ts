import { create } from "zustand";

interface EventTypesStore {
  eventTypes: string[];
  setEventTypes: (eventTypes: string[]) => void;
}

export const eventTypesStore = create<EventTypesStore>((set) => ({
  eventTypes: [],
  setEventTypes: (eventTypes: string[]) => set({ eventTypes }),
}));
