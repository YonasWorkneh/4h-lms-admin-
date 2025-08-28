// stores/schoolStore.ts
import { create } from "zustand";

interface SchoolStore {
  selectedSchools: string[];
  toggleSchool: (id: string) => void;
  removeSchool: (id: string) => void;
  clearSchools: () => void;
}

export const useSchoolStore = create<SchoolStore>((set) => ({
  selectedSchools: [],
  toggleSchool: (id) =>
    set((state) => ({
      selectedSchools: state.selectedSchools.includes(id)
        ? state.selectedSchools.filter((s) => s !== id)
        : [...state.selectedSchools, id],
    })),
  removeSchool: (id) =>
    set((state) => ({
      selectedSchools: state.selectedSchools.filter((s) => s !== id),
    })),
  clearSchools: () => set({ selectedSchools: [] }),
}));
