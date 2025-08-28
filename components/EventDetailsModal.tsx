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
      <DialogContent className="max-w-sm p-0 gap-0 bg-none">
        {/* Header with action buttons */}
        <div className="flex items-center justify-between p-4 pb-2">
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" onClick={handleDelete}>
              <Trash2 className="w-4 h-4 text-gray-600" />
            </Button>
          </div>
        </div>

        <div className="px-4 pb-4 space-y-4">
          {/* Event title with color indicator */}
          <div className="flex items-start gap-3">
            <div className="w-3 h-3 bg-green-600 rounded-sm mt-1 flex-shrink-0"></div>
            <div className="flex-1">
              <h2 className="text-2xl font-normal text-gray-900 leading-tight">
                {event.title}
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                {formatDate(event.date)}
              </p>
              {event.time && (
                <p className="text-sm text-gray-600">{event.time}</p>
              )}
            </div>
          </div>

          {/* Event details */}
          <div className="space-y-3">
            {event.type && (
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 flex items-center justify-center">
                  <div className="w-3 h-0.5 bg-gray-400"></div>
                  <div className="w-3 h-0.5 bg-gray-400"></div>
                  <div className="w-3 h-0.5 bg-gray-400"></div>
                </div>
                <span className="text-sm text-gray-900">{event.type}</span>
              </div>
            )}

            {event.calendar && (
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-900">{event.calendar}</span>
              </div>
            )}

            {event.visibility && (
              <div className="flex items-center gap-3">
                <Lock className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-900">
                  {event.visibility}
                </span>
              </div>
            )}

            {event.description && (
              <div className="pt-2">
                <div className="flex items-center gap-4">
                  <AlignLeft className="w-4 h-4 text-gray-500" />
                  <p className="text-sm text-gray-700">{event.description}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
