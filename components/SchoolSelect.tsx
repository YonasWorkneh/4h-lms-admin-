"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { X, Check, School } from "lucide-react";
import { useSchoolStore } from "@/store/school";
import Button from "./Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const schools = [
  { id: "1", name: "Dr. Haddis" },
  { id: "2", name: "Bole Community" },
  { id: "3", name: "Addis Raey" },
  { id: "4", name: "Misrak Dil" },
  { id: "5", name: "Bole Highschool" },
];

export default function SchoolSelect() {
  const { selectedSchools, toggleSchool, removeSchool } = useSchoolStore();

  return (
    <>
      <Card className="border-green-200 bg-white/50 shadow-none">
        <CardHeader>
          <CardTitle className="text-green-800 flex items-center">
            <School className="w-5 h-5 mr-2" />
            Add Schools
          </CardTitle>
          <CardDescription className="text-green-600">
            Select schools for the semester
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 grid grid-cols-1">
          <div className="space-y-1">
            <Label htmlFor="schools" className="text-green-800">
              Select Schools
            </Label>

            {/* Select */}
            <Select value="" onValueChange={toggleSchool}>
              <SelectTrigger
                id="schools"
                className="border-green-400 focus-visible:ring-1 focus-visible:ring-green-400 focus-visible:ring-offset-2 w-1/2"
              >
                <SelectValue placeholder="Select school" />
              </SelectTrigger>

              <SelectContent className="focus-visible:ring-green-400 focus-visible:ring-offset-2">
                {schools.map((school) => (
                  <SelectItem
                    key={school.id}
                    value={school.id}
                    className="focus-visible:ring-green-400 focus-visible:ring-offset-2 flex justify-between items-center"
                  >
                    <span>{school.name}</span>

                    {selectedSchools.includes(school.id) && (
                      <span> &#10003;</span>
                    )}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {/* Chips */}
          <div className="flex flex-wrap gap-2">
            {selectedSchools.map((id) => {
              const school = schools.find((s) => s.id === id);
              if (!school) return null;
              return (
                <div
                  key={id}
                  className="flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded-full"
                >
                  <span>{school.name}</span>
                  <button onClick={() => removeSchool(id)}>
                    <X size={14} />
                  </button>
                </div>
              );
            })}
          </div>
          <Button text="Save Schools" styles="w-1/2" />
        </CardContent>
      </Card>
    </>
  );
}
