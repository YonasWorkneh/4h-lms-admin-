"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { BookOpen, Calendar } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import Button from "./Button";
import { useSemesterStore } from "@/store/semester";

export default function SemesterSetUp() {
  const { semester, setSemester } = useSemesterStore();
  const [yearInput, setYearInput] = useState(semester.year);
  const [termInput, setTermInput] = useState(semester.term);

  const handleAddSemester = () => {
    // Send To Backend
  };
  useEffect(
    () => setSemester({ year: yearInput, term: termInput }),
    [termInput, yearInput]
  );

  return (
    <div>
      <Card className="border-green-200 bg-white/50 shadow-none">
        <CardHeader>
          <CardTitle className="text-green-800 flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            Basic Information
          </CardTitle>
          <CardDescription className="text-green-600">
            Essential details about semester
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 grid grid-cols-1">
          <div>
            <div className="space-y-1 w-full">
              <Label htmlFor="year" className="text-green-800">
                Semester Year *
              </Label>
              <Input
                id="year"
                type="text"
                pattern="\d{4}"
                placeholder="YYYY"
                className="border-green-400 w-1/2 focus-visible:ring-1 focus-visible:ring-green-400 focus-visible:ring-offset-2"
                value={yearInput}
                onChange={(e) => setYearInput(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full">
            <Label htmlFor="term" className="text-green-800">
              Semester Term *
            </Label>
            <Select value={termInput} onValueChange={setTermInput}>
              <SelectTrigger
                id="term"
                className="border-green-400 focus-visible:ring-1 focus-visible:ring-green-400 focus-visible:ring-offset-2 w-1/2 mt-1"
              >
                <SelectValue placeholder="Select term" />
              </SelectTrigger>
              <SelectContent className="focus-visible:ring-green-400 focus-visible:ring-offset-2">
                <SelectItem
                  value="first"
                  className="focus-visible:ring-green-400 focus-visible:ring-offset-2"
                >
                  First
                </SelectItem>
                <SelectItem
                  className="focus-visible:ring-green-400 focus-visible:ring-offset-2"
                  value="second"
                >
                  Second
                </SelectItem>
                <SelectItem
                  className="focus-visible:ring-green-400 focus-visible:ring-offset-2"
                  value="third"
                >
                  Third
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button
            text="Add Semester"
            styles="w-1/2"
            onClick={handleAddSemester}
          />
        </CardContent>
      </Card>
    </div>
  );
}
