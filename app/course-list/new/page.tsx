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
        <div className="mb-8">
          <h1 className="text-3xl md:text-2xl font-bold text-green-900 mb-2">
            Create New Course
          </h1>
        </div>

        <div>
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6 max-w-5xl">
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
                      className="border-green-400 focus-visible:ring-1 focus-visible:ring-green-400 focus-visible:ring-offset-2"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-green-800">
                    Course Description *
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Provide a comprehensive description of what students will learn..."
                    className="border-green-400 focus-visible:ring-1 focus-visible:ring-green-400 focus-visible:ring-offset-2 min-h-[120px]"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="plan" className="text-green-800">
                      Course Lesson Plan (use google spreadsheet link)*
                    </Label>
                    <div className="relative">
                      <Input
                        id="plan"
                        placeholder="e.g., https://docs.google.com/spreadsheets "
                        className="border-green-400 focus-visible:ring-1 focus-visible:ring-green-400 focus-visible:ring-offset-2"
                      />
                      <div className="absolute left-0 top-[calc(50%-10px)] w-full flex justify-end px-4">
                        <Link size={16} className="text-green-700" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-none shadow-none">
                  <div>
                    <Label htmlFor="material" className="text-green-800">
                      Course Materials (Upload supporting files like PDFs,
                      slides, or docs)*
                    </Label>
                  </div>
                  <div className="mt-2">
                    <div
                      className="border-2 border-dashed border-green-200 rounded-lg p-6 text-center hover:border-green-300 transition-colors cursor-pointer"
                      onClick={() => materialInput?.current?.click()}
                    >
                      <Upload className="w-10 h-10 text-green-400 mx-auto mb-3" />
                      <p className="text-green-600 mb-1">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-sm text-green-500">
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
                            <span className="text-green-700 text-sm font-medium truncate max-w-[250px]">
                              {file.name}
                            </span>
                            <button
                              onClick={() => removeMaterial(idx)}
                              className="ml-2 p-1 rounded-full bg-white border border-green-300 hover:bg-green-100"
                            >
                              <X className="w-4 h-4 text-green-600" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
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
          </div>

          {/* Course Image */}
          <div className="space-y-6 max-w-5xl mt-6">
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
                  <div className="border-2 border-dashed border-green-400 rounded-lg p-8 text-center hover:border-green-300 transition-colors cursor-pointer">
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
          <Btn text="Add Course" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}
