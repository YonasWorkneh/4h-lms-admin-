"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
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
      <DialogContent className="max-w-xl p-0 gap-0">
        <DialogHeader className="p-4 pb-0" />

        <div className=" space-y-4 p-8">
          <Tabs
            value={currentTab}
            onValueChange={setCurrentTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger
                value="startDate"
                className="rounded-full data-[state=active]:bg-white data-[state=active]:text-black"
              >
                Start Date
              </TabsTrigger>
              <TabsTrigger
                value="endDate"
                className="rounded-full data-[state=active]:bg-white data-[state=active]:text-black"
              >
                End Date
              </TabsTrigger>
              <TabsTrigger
                value="classDate"
                className="rounded-full data-[state=active]:bg-white data-[state=active]:text-black"
              >
                Class Date
              </TabsTrigger>
              <TabsTrigger
                value="event"
                className="rounded-full data-[state=active]:bg-white data-[state=active]:text-black"
              >
                Event
              </TabsTrigger>
            </TabsList>

            {/* Event Tab → Editable title */}
            <TabsContent value="event" className="space-y-4 mt-4">
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
                  className="border-0 border-b px-0 text-lg font-medium rounded-none border-green-400 focus-visible:ring-1 focus-visible:ring-green-400 focus-visible:ring-offset-2 w-full mt-1"
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
              <div className="flex items-center gap-3 py-2">
                <Clock className="w-4 h-4 text-gray-500" />
                <div className="flex-1">
                  <div className="text-sm text-gray-900">
                    {formatDate(selectedDate)} – {formatDate(selectedDate)}
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-green-600 border-green-600 bg-green-50 rounded-full hover:bg-inherit hover:text-inherit"
                  onClick={() => setShowTimeInput(!showTimeInput)}
                >
                  Add time
                </Button>
              </div>
              {showTimeInput && (
                <div className="flex items-center gap-3 py-2 pl-7">
                  <div className="flex gap-2 flex-1">
                    <Input
                      type="time"
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                      className="text-sm"
                      placeholder="Start time"
                    />
                    <Input
                      type="time"
                      value={endTime}
                      className="text-sm"
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
                <AlignLeft className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">Add description</span>
              </div>
              {showDescriptionInput && (
                <div className="pl-7">
                  <Textarea
                    placeholder="Add description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="min-h-[80px] text-sm focus-visible:ring-1 focus-visible:ring-green-400 focus-visible:ring-offset-2"
                  />
                </div>
              )}
            </TabsContent>

            {/* Other Tabs → Fixed title */}
            {["startDate", "endDate", "classDate"].map((tab) => (
              <TabsContent key={tab} value={tab} className="space-y-4 mt-4">
                <div className="border-0 border-b border-gray-200 rounded-none px-0 text-lg font-medium text-gray-900">
                  {tabTitles[tab]}
                </div>
                <div className="flex items-center gap-3 py-2">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <div className="flex-1">
                    <div className="text-sm text-gray-900">
                      {formatDate(selectedDate)}
                    </div>
                  </div>
                  {tab === "classDate" && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-green-600 border-green-600 bg-green-50 rounded-full hover:bg-inherit hover:text-inherit"
                      onClick={() => setShowTimeInput(!showTimeInput)}
                    >
                      Add time
                    </Button>
                  )}
                </div>
                {showTimeInput && (
                  <div className="flex items-center gap-3 py-2 pl-7">
                    <div className="flex gap-2 flex-1">
                      <Input
                        type="time"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        className="text-sm"
                        placeholder="Start time"
                      />
                      <Input
                        type="time"
                        className="text-sm"
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

          <div className="flex justify-between pt-4">
            <Button
              onClick={handleSave}
              className="bg-green-600 hover:bg-green-700 text-white"
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
