"use client";

import { useState, useEffect } from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";
import EventModal from "./EventModal";
import { EventDetailsModal } from "./EventDetailsModal";
import Button from "./Button";
import { useCalendarStore, Event } from "@/store/calendar";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const makeDate = (month: number, day: number, year: number) =>
  new Date(year, month - 1, day);

export const getEthiopianHolidays = (year: number): Event[] => [
  {
    id: 1,
    title: "እንቁጣጣሽ (New Year)",
    date: makeDate(9, 11, year),
    description: `Ethiopian New Year celebration marking the end of the rainy season. (መስከረም 1, ${
      year - 7
    } EC)`,
  },
  {
    id: 2,
    title: "መስቀል (Finding of the True Cross)",
    date: makeDate(9, 27, year),
    description: `Celebration of the discovery of the True Cross by Empress Helena. (መስከረም 17, ${
      year - 7
    } EC)`,
  },
  {
    id: 33,
    title: `የብሔር ብሔረሰቦች ቀን (Ethiopian Nation and nationalities Day).`,
    description: `Celebration of the nation and nationalities. (ህዳር 20, ${
      year - 7
    } EC)`,
    date: makeDate(11, 29, year),
  },
  {
    id: 3,
    title: "ገና (Ethiopian Christmas)",
    date: makeDate(1, 7, year),
    description: `Ethiopian Orthodox celebration of the birth of Christ. (ታህሳስ 29, ${
      year - 8
    } EC)`,
  },
  {
    id: 4,
    title: "ጥምቀት (Epiphany)",
    date: makeDate(1, 19, year),
    description: `Commemoration of the baptism of Jesus in the Jordan River. (ጥር 11, ${
      year - 8
    } EC)`,
  },
  {
    id: 5,
    title: "ስቅለት (Good Friday)",
    date: makeDate(4, 18, year),
    description: "Ethiopian Orthodox Good Friday.",
  },
  {
    id: 6,
    title: "ትንሳኤ (Easter Sunday)",
    date: makeDate(4, 20, year),
    description: "Ethiopian Orthodox Easter Sunday celebration.",
  },
  {
    id: 8,
    title: "Id al-Fitr (End of Ramadan)",
    date: makeDate(3, 30, year),
    description:
      "Islamic holiday marking the end of Ramadan fasting. (date varies yearly)",
  },
  {
    id: 9,
    title: "Id al-Adha (Sacrifice Feast)",
    date: makeDate(6, 6, year),
    description:
      "Islamic Feast of Sacrifice, commemorating the trial of Abraham. (date varies yearly)",
  },
  {
    id: 10,
    title: "የአድዋ ድል (Victory of Adwa)",
    date: makeDate(3, 2, year),
    description: `Commemoration of Ethiopia's victory over Italian forces in 1896. (የካቲት 23, ${
      year - 8
    } EC)`,
  },
  {
    id: 11,
    title: "የላባደሮች ቀን (Labour Day)",
    date: makeDate(5, 1, year),
    description: `International Workers' Day celebrated in Ethiopia. ሚያዚያ 23, ${
      year - 8
    } EC)`,
  },
  {
    id: 12,
    title: "የአርበኞች ቀን (Patriots' Victory Day)",
    date: makeDate(5, 5, year),
    description: `Commemoration of Ethiopian patriots' victory over Italian occupation. (ሚያዚያ 27, ${
      year - 8
    } EC)`,
  },
  {
    id: 13,
    title: "ደርግ የወደቀበት ቀን (Derg Downfall Day)",
    date: makeDate(5, 28, year),
    description: `Celebration of the fall of the Derg regime in 1991. (ግንቦት 20, ${
      year - 8
    } EC)`,
  },
];

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [detailOpened, setDetailOpened] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // 👇 Zustand store
  const { name, events, setCalendarName, addEvent, removeEvent, setEvents } =
    useCalendarStore();

  // Update holidays automatically when year changes
  useEffect(() => {
    const userEvents = useCalendarStore
      .getState()
      .events.filter((e) => e.id >= 10000);
    const holidays = getEthiopianHolidays(currentDate.getFullYear());
    setEvents([...userEvents, ...holidays]);
  }, [currentDate, setEvents]);

  const goToToday = () => setCurrentDate(new Date());
  const goToPreviousMonth = () =>
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  const goToNextMonth = () =>
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setSelectedEvent(null);
    setIsModalOpen(true);
  };

  const handleCreateEvent = (eventData: {
    title: string;
    time?: string;
    description?: string;
  }) => {
    if (selectedDate) {
      const newEvent: Event = {
        id: Math.floor(Math.random() * 10000) + 10000, // unique user ID
        title: eventData.title,
        date: selectedDate,
        time: eventData.time,
        description: eventData.description,
      };
      addEvent(newEvent);
    }
    setIsModalOpen(false);
    setSelectedDate(null);
  };

  const handleEventClick = (id: number) => {
    setSelectedDate(null);
    setSelectedEvent(events.find((event) => event.id === id) || null);
    setDetailOpened(true);
  };

  const handleDelete = (id: number) => removeEvent(id);

  return (
    <>
      <div className="bg-white/50 rounded-lg overflow-hidden">
        <div className="flex flex-col">
          <div className="space-y-2 p-3 sm:p-4">
            <Label
              htmlFor="title"
              className="text-green-800 text-sm sm:text-base"
            >
              Calendar Name *
            </Label>
            <Input
              id="title"
              placeholder="e.g., Y2025T1-Calendar"
              value={name}
              onChange={(e) => setCalendarName(e.target.value)}
              className="border-green-400 w-full sm:w-1/2 focus-visible:ring-1 focus-visible:ring-green-400 focus-visible:ring-offset-2 text-sm sm:text-base"
            />
          </div>

          <CalendarHeader
            currentDate={currentDate}
            onToday={goToToday}
            onPrevious={goToPreviousMonth}
            onNext={goToNextMonth}
          />

          <CalendarGrid
            currentDate={currentDate}
            events={events}
            onDateClick={handleDateClick}
            onEventClick={handleEventClick}
          />
        </div>
      </div>

      <div className="bg-white/50 p-4 sm:p-6 lg:p-8 rounded-lg mt-4">
        <Button text="Save Calendar" styles="w-full sm:w-auto" />
      </div>

      <EventModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedDate(null);
        }}
        onSave={handleCreateEvent}
        selectedDate={selectedDate}
      />
      <EventDetailsModal
        isOpen={detailOpened}
        event={selectedEvent}
        onClose={() => {
          setSelectedEvent(null);
          setDetailOpened(false);
        }}
        onDelete={handleDelete}
      />
    </>
  );
}
