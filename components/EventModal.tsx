"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, AlignLeft } from "lucide-react";
import { start } from "repl";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (eventData: {
    title: string;
    time?: string;
    description?: string;
  }) => void;
  selectedDate: Date | null;
}

const events = [
  { id: "1", name: "4H Day" },
  { id: "2", name: "Carrer Day" },
  { id: "3", name: "Trip" },
  { id: "3", name: "Graduation" },
];

export default function EventModal({
  isOpen,
  onClose,
  onSave,
  selectedDate,
}: EventModalProps) {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [showTimeInput, setShowTimeInput] = useState(false);
  const [showDescriptionInput, setShowDescriptionInput] = useState(false);
  const [currentTab, setCurrentTab] = useState("classDate");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleSave = () => {
    let finalTitle = title.trim();

    if (currentTab !== "event") {
      // Auto-assign title for date-based tabs
      const tabTitles: Record<string, string> = {
        startDate: "Start Date",
        endDate: "End Date",
        classDate: "Class Date",
        event: "Event",
      };
      finalTitle = tabTitles[currentTab];
    }

    if (finalTitle) {
      onSave({
        title: finalTitle,
        time: time || undefined,
        description: description || undefined,
      });
      resetForm();
    }
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const resetForm = () => {
    setTitle("");
    setTime("");
    setDescription("");
    setShowTimeInput(false);
    setShowDescriptionInput(false);
    setCurrentTab("classDate");
  };

  const formatDate = (date: Date | null) => {
    if (!date) return "";
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };

  const tabTitles: Record<string, string> = {
    startDate: "Start Date",
    endDate: "End Date",
    classDate: "Class Date",
    event: "Event",
  };

  useEffect(() => setTime(startTime + "-" + endTime), [startTime, endTime]);

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-xl w-[95vw] sm:w-full p-0 gap-0 max-h-[90vh] overflow-y-auto">
        <DialogHeader className="p-3 sm:p-4 pb-0" />
        <div className="space-y-4 p-4 sm:p-6 lg:p-8">
          <Tabs
            value={currentTab}
            onValueChange={setCurrentTab}
            className="w-full "
          >
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 gap-1 sm:gap-2 h-auto">
              <TabsTrigger
                value="startDate"
                className="rounded-full data-[state=active]:bg-white data-[state=active]:text-black text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2"
              >
                <span className="hidden sm:inline">Start Date</span>
                <span className="sm:hidden">Start</span>
              </TabsTrigger>
              <TabsTrigger
                value="endDate"
                className="rounded-full data-[state=active]:bg-white data-[state=active]:text-black text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2"
              >
                <span className="hidden sm:inline">End Date</span>
                <span className="sm:hidden">End</span>
              </TabsTrigger>
              <TabsTrigger
                value="classDate"
                className="rounded-full data-[state=active]:bg-white data-[state=active]:text-black text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2"
              >
                <span className="hidden sm:inline">Class Date</span>
                <span className="sm:hidden">Class</span>
              </TabsTrigger>
              <TabsTrigger
                value="event"
                className="rounded-full data-[state=active]:bg-white data-[state=active]:text-black text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2"
              >
                Event
              </TabsTrigger>
            </TabsList>

            {/* Event Tab → Editable title */}
            <TabsContent
              value="event"
              className="space-y-3 sm:space-y-4 mt-3 sm:mt-4"
            >
              <Select
                onValueChange={(id) => {
                  const selected = events.find(
                    (event) => event.id.toString() === id
                  );
                  if (selected) setTitle(selected.name);
                }}
              >
                <SelectTrigger
                  id="term"
                  className="border-0 border-b px-0 text-base sm:text-lg font-medium text-green-700 rounded-none border-green-400 shadow-none focus-visible:ring-0 focus-visible:outline-none focus:outline-none focus:ring-0 w-full mt-1"
                >
                  <SelectValue placeholder="Add Event" />
                </SelectTrigger>
                <SelectContent className="focus-visible:ring-green-400 focus-visible:ring-offset-2">
                  {events.map((event) => (
                    <SelectItem
                      key={event.id}
                      value={event.id}
                      className="focus-visible:ring-green-400 focus-visible:ring-offset-2"
                    >
                      {event.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="flex items-center gap-2 sm:gap-3 py-2">
                <Clock className="w-4 h-4 text-gray-500 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-xs sm:text-sm text-gray-900">
                    {formatDate(selectedDate)}
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-green-600 border-green-600 bg-green-50 rounded-full hover:bg-inherit hover:text-inherit text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-2 w-auto"
                  onClick={() => setShowTimeInput(!showTimeInput)}
                >
                  Add time
                </Button>
              </div>

              {showTimeInput && (
                <div className="flex items-center gap-3 py-2 pl-6 sm:pl-7">
                  <div className="flex flex-col sm:flex-row gap-2 flex-1">
                    <Input
                      type="time"
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                      className="text-sm w-full sm:w-auto"
                      placeholder="Start time"
                    />
                    <Input
                      type="time"
                      value={endTime}
                      className="text-sm w-full sm:w-auto"
                      placeholder="End time"
                      onChange={(e) => setEndTime(e.target.value)}
                    />
                  </div>
                </div>
              )}

              <div
                className="flex items-center gap-3 py-2 cursor-pointer hover:bg-gray-50 rounded"
                onClick={() => setShowDescriptionInput(!showDescriptionInput)}
              >
                <AlignLeft className="w-4 h-4 text-gray-500 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-gray-600">
                  Add description
                </span>
              </div>

              {showDescriptionInput && (
                <div className="pl-6 sm:pl-7">
                  <Textarea
                    placeholder="Add description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="min-h-[60px] sm:min-h-[80px] text-sm focus-visible:ring-1 focus-visible:ring-green-400 focus-visible:ring-offset-2 w-full"
                  />
                </div>
              )}
            </TabsContent>

            {/* Other Tabs → Fixed title */}
            {["startDate", "endDate", "classDate"].map((tab) => (
              <TabsContent
                key={tab}
                value={tab}
                className="space-y-3 sm:space-y-4 mt-3 sm:mt-4"
              >
                <div className="border-0 border-b border-gray-200 rounded-none px-0 text-base sm:text-lg font-medium text-gray-900">
                  {tabTitles[tab]}
                </div>
                <div className="flex items-center gap-1 sm:gap-3 py-2">
                  <Clock className="w-4 h-4 text-gray-500 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs sm:text-sm text-gray-900">
                      {formatDate(selectedDate)}
                    </div>
                  </div>
                  {tab === "classDate" && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-green-600 border-green-600 bg-green-50 rounded-full hover:bg-inherit hover:text-inherit text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-2 w-auto"
                      onClick={() => setShowTimeInput(!showTimeInput)}
                    >
                      Add time
                    </Button>
                  )}
                </div>
                {showTimeInput && (
                  <div className="flex items-center gap-3 py-2 pl-6 sm:pl-7">
                    <div className="flex flex-col sm:flex-row gap-2 flex-1">
                      <Input
                        type="time"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        className="text-sm w-full sm:w-auto"
                        placeholder="Start time"
                      />
                      <Input
                        type="time"
                        className="text-sm w-full sm:w-auto"
                        placeholder="End time"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                      />
                    </div>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>

          <div className="flex justify-center sm:justify-start pt-3 sm:pt-4">
            <Button
              onClick={handleSave}
              className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 py-2 text-sm sm:text-base w-full sm:w-auto"
              disabled={currentTab === "event" && !title.trim()}
            >
              Save
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
