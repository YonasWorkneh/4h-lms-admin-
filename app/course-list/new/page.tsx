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
import {
  BookOpen,
  Users,
  Clock,
  Upload,
  Plus,
  X,
  Pencil,
  Link,
} from "lucide-react";
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
  const materialInput = useRef<HTMLInputElement>(null);
  const [materials, setMaterials] = useState<File[]>([]);

  const removeMaterial = (index: number) => {
    setMaterials((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="container px-4 py-4 max-w-5xl">
        <Btn
          text="Back"
          styles="!rounded-full px-6 py-1 mb-4"
          onClick={() => router.back()}
        />
        <div className="mb-6 lg:mb-8">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-900 mb-2">
            Create New Course
          </h1>
        </div>

        <div className="space-y-6">
          {/* Basic Information Card */}
          <Card className="border-green-100">
            <CardHeader>
              <CardTitle className="text-green-800 text-lg lg:text-xl flex items-center">
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Basic Information
              </CardTitle>
              <CardDescription className="text-green-600 text-sm lg:text-base">
                Essential details about course
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 lg:space-y-6">
              <div className="space-y-2">
                <Label
                  htmlFor="title"
                  className="text-green-800 text-sm lg:text-base"
                >
                  Course Title *
                </Label>
                <Input
                  id="title"
                  placeholder="e.g., Complete Web Development Bootcamp"
                  className="border-green-400 focus-visible:ring-1 focus-visible:ring-green-400 focus-visible:ring-offset-2 text-sm lg:text-base"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="description"
                  className="text-green-800 text-sm lg:text-base"
                >
                  Course Description *
                </Label>
                <Textarea
                  id="description"
                  placeholder="Provide a comprehensive description of what students will learn..."
                  className="border-green-400 focus-visible:ring-1 focus-visible:ring-green-400 focus-visible:ring-offset-2 min-h-[100px] sm:min-h-[120px] text-sm lg:text-base"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="plan"
                  className="text-green-800 text-sm lg:text-base"
                >
                  Course Lesson Plan (use google spreadsheet link) *
                </Label>
                <div className="relative">
                  <Input
                    id="plan"
                    placeholder="e.g., https://docs.google.com/spreadsheets"
                    className="border-green-400 focus-visible:ring-1 focus-visible:ring-green-400 focus-visible:ring-offset-2 text-sm lg:text-base pr-8"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <Link size={16} className="text-green-700" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="material"
                  className="text-green-800 text-sm lg:text-base"
                >
                  Course Materials (Upload supporting files like PDFs, slides,
                  or docs) *
                </Label>
                <div
                  className="border-2 border-dashed border-green-200 rounded-lg p-4 sm:p-6 text-center hover:border-green-300 transition-colors cursor-pointer"
                  onClick={() => materialInput?.current?.click()}
                >
                  <Upload className="w-8 h-8 sm:w-10 sm:h-10 text-green-400 mx-auto mb-2 sm:mb-3" />
                  <p className="text-green-600 mb-1 text-sm sm:text-base">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs sm:text-sm text-green-500">
                    PDF, PPT, DOCX (max 5MB each)
                  </p>
                </div>

                {/* Preview uploaded materials */}
                {materials.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {materials.map((file, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between bg-green-50 border border-green-200 rounded-md px-3 py-2"
                      >
                        <span className="text-green-700 text-xs sm:text-sm font-medium truncate flex-1 mr-2">
                          {file.name}
                        </span>
                        <button
                          onClick={() => removeMaterial(idx)}
                          className="p-1 rounded-full bg-white border border-green-300 hover:bg-green-100 flex-shrink-0"
                        >
                          <X className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                <input
                  hidden
                  ref={materialInput}
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx,.ppt,.pptx"
                  onChange={(e) => {
                    const files = Array.from(e.target.files || []);
                    setMaterials((prev) => [...prev, ...files]);
                  }}
                  id="material"
                />
              </div>
            </CardContent>
          </Card>

          {/* Course Image Card */}
          <Card className="border-green-100">
            <CardHeader>
              <CardTitle className="text-green-800 text-lg lg:text-xl">
                Course Image
              </CardTitle>
              <CardDescription className="text-green-600 text-sm lg:text-base">
                Upload a course thumbnail
              </CardDescription>
            </CardHeader>
            <CardContent onClick={() => thumbnail?.current?.click()}>
              {image?.file ? (
                <div className="relative w-fit mx-auto">
                  <Image
                    src={image.url}
                    alt="course-thumbnail"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                  <button className="rounded-lg p-1 absolute top-2 right-2 bg-white border border-green-400 shadow-sm">
                    <Pencil className="h-4 w-4 text-green-400" />
                  </button>
                </div>
              ) : (
                <div className="border-2 border-dashed border-green-400 rounded-lg p-6 sm:p-8 text-center hover:border-green-300 transition-colors cursor-pointer">
                  <Upload className="w-8 h-8 sm:w-12 sm:h-12 text-green-400 mx-auto mb-3 sm:mb-4" />
                  <p className="text-green-600 mb-1 sm:mb-2 text-sm sm:text-base">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs sm:text-sm text-green-500">
                    PNG, JPG up to 2MB
                  </p>
                </div>
              )}
            </CardContent>
            <input
              hidden
              ref={thumbnail}
              type="file"
              accept="image/*"
              onChange={(e) => {
                const files = Array.from(e.target.files || []).map((file) => ({
                  file,
                  url: URL.createObjectURL(file),
                }));
                setImage(files[0]);
              }}
            />
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 mt-6 lg:mt-8 pt-6 border-t border-green-100">
          <Btn text="Add Course" styles="w-full sm:w-auto" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}
