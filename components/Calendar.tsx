"use client";

import { useState, useEffect } from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";
import EventModal from "./EventModal";
import { EventDetailsModal } from "./EventDetailsModal";
import Button from "./Button";

type Event = {
  id: number;
  title: string;
  date: Date;
  time?: string;
  description?: string;
};

const makeDate = (month: number, day: number, year: number) =>
  new Date(year, month - 1, day);

export const getEthiopianHolidays = (year: number): Event[] => [
  {
    id: 1,
    title: "Enkutatash (New Year)",
    date: makeDate(9, 11, year),
    description:
      "Ethiopian New Year celebration marking the end of the rainy season. (Meskerem 1, 2018 EC)",
  },
  {
    id: 2,
    title: "Meskel (Finding of the True Cross)",
    date: makeDate(9, 27, year),
    description:
      "Celebration of the discovery of the True Cross by Empress Helena. (Meskerem 17, 2018 EC)",
  },
  {
    id: 3,
    title: "Genna (Ethiopian Christmas)",
    date: makeDate(1, 7, year),
    description:
      "Ethiopian Orthodox celebration of the birth of Christ. (Tahsas 29, 2017 EC)",
  },
  {
    id: 4,
    title: "Timket (Epiphany)",
    date: makeDate(1, 19, year),
    description:
      "Commemoration of the baptism of Jesus in the Jordan River. (Tir 11, 2017 EC)",
  },
  {
    id: 5,
    title: "Siklet (Good Friday)",
    date: makeDate(4, 18, year),
    description: "Ethiopian Orthodox Good Friday.",
  },
  {
    id: 6,
    title: "Tensae (Easter Sunday)",
    date: makeDate(4, 20, year),
    description: "Ethiopian Orthodox Easter Sunday celebration.",
  },
  {
    id: 7,
    title: "Fasika (Orthodox Easter Monday)",
    date: makeDate(4, 21, year),
    description: "Ethiopian Orthodox Easter Monday holiday.",
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
    title: "Victory of Adwa",
    date: makeDate(3, 2, year),
    description:
      "Commemoration of Ethiopia's victory over Italian forces in 1896. (Yekatit 23, 1917 EC)",
  },
  {
    id: 11,
    title: "Labour Day",
    date: makeDate(5, 1, year),
    description: "International Workers' Day celebrated in Ethiopia.",
  },
  {
    id: 12,
    title: "Patriots' Victory Day",
    date: makeDate(5, 5, year),
    description:
      "Commemoration of Ethiopian patriots' victory over Italian occupation.",
  },
  {
    id: 13,
    title: "Derg Downfall Day",
    date: makeDate(5, 28, year),
    description:
      "Celebration of the fall of the Derg regime in 1991. (Ginbot 20, 1983 EC)",
  },
];

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [detailOpened, setDetailOpened] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [events, setEvents] = useState<Array<Event>>(
    getEthiopianHolidays(new Date().getFullYear())
  );

  // 👇 Update holidays automatically when currentDate's year changes
  useEffect(() => {
    setEvents((prev) => {
      // keep user-created events from prev state
      const userEvents = prev.filter((e) => e.id >= 10000);
      return [
        ...getEthiopianHolidays(currentDate.getFullYear()),
        ...userEvents,
      ];
    });
  }, [currentDate]);

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  const goToPreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const goToNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

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
        id: Math.floor(Math.random() * 10000) + 10000, // ensure different ID space from holidays
        title: eventData.title,
        date: selectedDate,
        time: eventData.time,
        description: eventData.description,
      };
      setEvents((prev) => [...prev, newEvent]);
    }
    setIsModalOpen(false);
    setSelectedDate(null);
  };

  const handleEventClick = (id: number) => {
    setSelectedDate(null);
    setSelectedEvent(events.find((event) => event.id === id) || null);
    setDetailOpened(true);
  };

  const handleDelete = (id: number) => {
    setEvents((prev) => prev.filter((event) => event.id !== id));
  };

  return (
    <>
      <div className="flex bg-white/50 p-2">
        {/* Main Calendar */}
        <div className="flex-1 flex flex-col">
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
      </div>
      <div className="bg-white/50 p-8">
        <Button text="Submit Calendar" />
      </div>
    </>
  );
}
