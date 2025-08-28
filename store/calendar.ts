import { create } from "zustand";

export type Event = {
  id: number;
  title: string;
  date: Date;
  time?: string;
  description?: string;
};

type CalendarState = {
  name: string;
  events: Event[];
  addEvent: (event: Event) => void;
  updateEvent: (id: number, updatedEvent: Partial<Event>) => void;
  removeEvent: (id: number) => void;
  clearEvents: () => void;
  setEvents: (events: Event[]) => void;
  setCalendarName: (name: string) => void;
};

export const useCalendarStore = create<CalendarState>((set) => ({
  name: "",
  events: [],
  setCalendarName: (name) =>
    set(() => ({
      name,
    })),

  addEvent: (event) => set((state) => ({ events: [...state.events, event] })),

  updateEvent: (id, updatedEvent) =>
    set((state) => ({
      events: state.events.map((ev) =>
        ev.id === id ? { ...ev, ...updatedEvent } : ev
      ),
    })),

  removeEvent: (id) =>
    set((state) => ({
      events: state.events.filter((ev) => ev.id !== id),
    })),

  clearEvents: () => set({ events: [] }),
  setEvents: (events: Event[]) => set({ events }),
}));
