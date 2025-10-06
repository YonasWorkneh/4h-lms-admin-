"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  X,
  Trash2,
  MoreHorizontal,
  Calendar,
  Lock,
  AlignLeft,
} from "lucide-react";

interface Event {
  id: number;
  title: string;
  date: Date;
  time?: string;
  description?: string;
  type?: string;
  calendar?: string;
  visibility?: string;
}

interface EventDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: Event | null;
  onDelete?: (eventId: number) => void;
}

export function EventDetailsModal({
  isOpen,
  onClose,
  event,
  onDelete,
}: EventDetailsModalProps) {
  if (!event) return null;

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };

  const handleDelete = () => {
    if (onDelete && event.id) {
      onDelete(event.id);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-sm w-[95vw] sm:w-full p-0 gap-0 bg-none max-h-[90vh] overflow-y-auto">
        {/* Header with action buttons */}
        <div className="flex items-center justify-between p-3 sm:p-4 pb-2">
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleDelete}
              className="h-8 w-8 sm:h-10 sm:w-10"
            >
              <Trash2 className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
            </Button>
          </div>
        </div>

        <div className="px-3 sm:px-4 pb-3 sm:pb-4 space-y-3 sm:space-y-4">
          {/* Event title with color indicator */}
          <div className="flex items-start gap-2 sm:gap-3">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-600 rounded-sm mt-1 flex-shrink-0"></div>
            <div className="flex-1 min-w-0">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-normal text-gray-900 leading-tight">
                {event.title}
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                {formatDate(event.date)}
              </p>
              {event.time && (
                <p className="text-xs sm:text-sm text-gray-600">{event.time}</p>
              )}
            </div>
          </div>

          {/* Event details */}
          <div className="space-y-2 sm:space-y-3">
            {event.type && (
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-0.5 sm:w-3 sm:h-0.5 bg-gray-400"></div>
                  <div className="w-2 h-0.5 sm:w-3 sm:h-0.5 bg-gray-400 ml-0.5"></div>
                  <div className="w-2 h-0.5 sm:w-3 sm:h-0.5 bg-gray-400 ml-0.5"></div>
                </div>
                <span className="text-xs sm:text-sm text-gray-900">
                  {event.type}
                </span>
              </div>
            )}

            {event.calendar && (
              <div className="flex items-center gap-2 sm:gap-3">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-gray-900">
                  {event.calendar}
                </span>
              </div>
            )}

            {event.visibility && (
              <div className="flex items-center gap-2 sm:gap-3">
                <Lock className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-gray-900">
                  {event.visibility}
                </span>
              </div>
            )}

            {event.description && (
              <div className="pt-1 sm:pt-2">
                <div className="flex items-start gap-2 sm:gap-4">
                  <AlignLeft className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
