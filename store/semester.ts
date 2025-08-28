import { create } from "zustand";

type SemesterStore = {
  year: string;
  term: string;
};

type SemesterState = {
  semester: SemesterStore;
  setSemester: (semester: Partial<SemesterStore>) => void;
  clearSemester: () => void;
};

export const useSemesterStore = create<SemesterState>((set) => ({
  semester: { year: "", term: "" },
  setSemester: (newSemester) =>
    set((state) => ({
      semester: { ...state.semester, ...newSemester },
    })),
  clearSemester: () => set({ semester: { year: "", term: "" } }),
}));
