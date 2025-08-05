"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Btn from "@/components/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Clock, Upload, Plus, X, Pencil } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Mock data for dropdowns
const schools = [
  { id: "1", name: "Dr. Haddis" },
  { id: "2", name: "Bole Community" },
  { id: "3", name: "Addis Raey" },
  { id: "4", name: "Misrak Dil" },
  { id: "5", name: "Bole Highschool" },
];

const instructors = [
  {
    id: "1",
    name: "Abigya Ayele",
    expertise: "Web Development",
  },
  {
    id: "2",
    name: "Yanet Binyam",
    expertise: "Basic English",
  },
  {
    id: "3",
    name: "Maryamawit",
    expertise: "Digital Marketing",
  },
  { id: "4", name: "Beti Yohannes", expertise: "Web Development" },
  {
    id: "5",
    name: "Lix",
    expertise: "Marketing",
  },
  {
    id: "6",
    name: "Ahadu Sefefe",
    expertise: "Web Development",
  },
];

export default function NewCoursePage() {
  const [selectedSchool, setSelectedSchool] = useState("");
  const [selectedMainInstructor, setSelectedMainInstructor] = useState("");
  const [selectedAssistants, setSelectedAssistants] = useState<string[]>([]);
  const [currentAssistant, setCurrentAssistant] = useState("");
  const thumbnail = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<any | null>(null);

  const addAssistant = () => {
    if (
      currentAssistant &&
      !selectedAssistants.includes(currentAssistant) &&
      currentAssistant !== selectedMainInstructor
    ) {
      setSelectedAssistants([...selectedAssistants, currentAssistant]);
      setCurrentAssistant("");
    }
  };

  const removeAssistant = (assistantId: string) => {
    setSelectedAssistants(
      selectedAssistants.filter((id) => id !== assistantId)
    );
  };
  const router = useRouter();

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <Btn
          text="Back"
          styles="!rounded-full px-6 py-1 mb-4"
          onClick={() => router.back()}
        />
        <div className="mb-8">
          <h1 className="text-3xl md:text-2xl font-bold text-green-900 mb-2">
            Create New Course
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information */}
            <Card className="border-green-100">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Basic Information
                </CardTitle>
                <CardDescription className="text-green-600">
                  Essential details about course
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title" className="text-green-800">
                      Course Title *
                    </Label>
                    <Input
                      id="title"
                      placeholder="e.g., Complete Web Development Bootcamp"
                      className="border-green-200 focus:border-green-400 focus:ring-green-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="school" className="text-green-800">
                      School *
                    </Label>
                    <Select
                      value={selectedSchool}
                      onValueChange={setSelectedSchool}
                    >
                      <SelectTrigger className="border-green-200 focus:border-green-400 focus:ring-green-400">
                        <SelectValue placeholder="Select a school" />
                      </SelectTrigger>
                      <SelectContent>
                        {schools.map((school) => (
                          <SelectItem key={school.id} value={school.id}>
                            <div className="flex items-center justify-between w-full">
                              <span>{school.name}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-green-800">
                    Course Description *
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Provide a comprehensive description of what students will learn..."
                    className="border-green-200 focus:border-green-400 focus:ring-green-400 min-h-[120px]"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Instructors */}
            <Card className="border-green-100">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Instructors
                </CardTitle>
                <CardDescription className="text-green-600">
                  Assign main instructor and assistant for this course
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="main-instructor" className="text-green-800">
                      Main Instructor *
                    </Label>
                    <Select
                      value={selectedMainInstructor}
                      onValueChange={setSelectedMainInstructor}
                    >
                      <SelectTrigger className="border-green-200 focus:border-green-400 focus:ring-green-400">
                        <SelectValue placeholder="Select main instructor" />
                      </SelectTrigger>
                      <SelectContent>
                        {instructors.map((instructor) => (
                          <SelectItem key={instructor.id} value={instructor.id}>
                            <div className="flex flex-col">
                              <span className="font-medium">
                                {instructor.name}
                              </span>
                              <span className="text-sm text-green-600">
                                {instructor.expertise} • ⭐
                              </span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="assistant" className="text-green-800">
                      Assistant Instructors
                    </Label>
                    <div className="flex gap-2">
                      <Select
                        value={currentAssistant}
                        onValueChange={setCurrentAssistant}
                      >
                        <SelectTrigger className="border-green-200 focus:border-green-400 focus:ring-green-400">
                          <SelectValue placeholder="Select assistant instructor" />
                        </SelectTrigger>
                        <SelectContent>
                          {instructors
                            .filter(
                              (instructor) =>
                                instructor.id !== selectedMainInstructor &&
                                !selectedAssistants.includes(instructor.id)
                            )
                            .map((instructor) => (
                              <SelectItem
                                key={instructor.id}
                                value={instructor.id}
                              >
                                <div className="flex flex-col">
                                  <span className="font-medium">
                                    {instructor.name}
                                  </span>
                                  <span className="text-sm text-green-600">
                                    {instructor.expertise} • ⭐{" "}
                                  </span>
                                </div>
                              </SelectItem>
                            ))}
                        </SelectContent>
                      </Select>
                      <Button
                        type="button"
                        onClick={addAssistant}
                        disabled={!currentAssistant}
                        className="bg-[var(--primary-color)] hover:bg-[var(--primary-color)]/80"
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>

                    {selectedAssistants.length > 0 && (
                      <div className="space-y-2">
                        <Label className="text-green-800 text-sm">
                          Selected Assistants:
                        </Label>
                        <div className="flex flex-wrap gap-2">
                          {selectedAssistants.map((assistantId) => {
                            const assistant = instructors.find(
                              (instructor) => instructor.id === assistantId
                            );
                            return (
                              <Badge
                                key={assistantId}
                                variant="outline"
                                className="border-green-200 text-green-700 pr-1"
                              >
                                <div className="flex items-center">
                                  <span className="mr-2">
                                    {assistant?.name}
                                  </span>
                                  <button
                                    onClick={() => removeAssistant(assistantId)}
                                    className="hover:text-red-500 transition-colors"
                                    type="button"
                                  >
                                    <X className="w-3 h-3" />
                                  </button>
                                </div>
                              </Badge>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Course Details */}
            <Card className="border-green-100">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Course Details
                </CardTitle>
                <CardDescription className="text-green-600">
                  Duration, and maximum intake information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="start-date" className="text-green-800">
                      Start Date *
                    </Label>
                    <Input
                      id="start-date"
                      type="date"
                      className="border-green-200 focus:border-green-400 focus:ring-green-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="end-date" className="text-green-800">
                      End Date
                    </Label>
                    <Input
                      id="end-date"
                      type="date"
                      className="border-green-200 focus:border-green-400 focus:ring-green-400"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="max-students" className="text-green-800">
                      Max Students
                    </Label>
                    <Input
                      id="max-students"
                      type="number"
                      placeholder="100"
                      className="border-green-200 focus:border-green-400 focus:ring-green-400"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Course Image */}
            <Card className="border-green-100">
              <CardHeader>
                <CardTitle className="text-green-800">Course Image</CardTitle>
                <CardDescription className="text-green-600">
                  Upload a course thumbnail
                </CardDescription>
              </CardHeader>
              <CardContent onClick={() => thumbnail?.current.click()}>
                {image?.file ? (
                  <div className="relative w-fit">
                    <Image
                      src={image.url}
                      alt="course-thumnail"
                      width={200}
                      height={200}
                    />
                    <button className="rounded-lg p-1 absolute top-0 -right-5 bg-gray-50 border border-green-400">
                      <Pencil className="h-5 w-5 text-green-400" />
                    </button>
                  </div>
                ) : (
                  <div className="border-2 border-dashed border-green-200 rounded-lg p-8 text-center hover:border-green-300 transition-colors cursor-pointer">
                    <Upload className="w-12 h-12 text-green-400 mx-auto mb-4" />
                    <p className="text-green-600 mb-2">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-sm text-green-500">PNG, JPG up to 2MB</p>
                  </div>
                )}
              </CardContent>
              <input
                hidden
                ref={thumbnail}
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const files = Array.from(e.target.files || []).map(
                    (file) => ({ file, url: URL.createObjectURL(file) })
                  );
                  setImage(files[0]);
                }}
              />
            </Card>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-green-100">
          <Btn text="Add School" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}
