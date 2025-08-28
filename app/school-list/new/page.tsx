"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";
import Button from "@/components/Button";
import { Button as Btn } from "@/components/ui/button";
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
      <div className="container px-4 py-4">
        <Button
          text="Back"
          styles="!rounded-full px-6 py-1 mb-4"
          onClick={() => router.back()}
        />
        <div className="mb-8">
          <h1 className="text-3xl md:text-2xl font-bold text-green-900 mb-2">
            Add New School
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
                  Essential details about school
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="space-y-2">
                    <Label htmlFor="title" className="text-green-800">
                      School Name *
                    </Label>
                    <Input
                      id="title"
                      placeholder="e.g., Bole Community School"
                      className="border-green-200 focus-visible:ring-1 focus-visible:ring-green-400 focus-visible:ring-offset-2"
                    />
                  </div>
                </div>
                <div>
                  <div className="space-y-2">
                    <Label htmlFor="title" className="text-green-800">
                      School location *
                    </Label>
                    <Input
                      id="title"
                      placeholder="e.g., ST Bole 12B"
                      className="border-green-200 focus-visible:ring-1 focus-visible:ring-green-400 focus-visible:ring-offset-2"
                    />
                  </div>{" "}
                </div>
                <div>
                  <div className="space-y-2">
                    <Label htmlFor="contact" className="text-green-800">
                      Contact *
                    </Label>
                    <Input
                      id="contact"
                      placeholder="e.g., +251 986261979"
                      className="border-green-200 focus-visible:ring-1 focus-visible:ring-green-400 focus-visible:ring-offset-2"
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
                <CardTitle className="text-green-800">School Image</CardTitle>
                <CardDescription className="text-green-600">
                  Optional school thumbnail
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
          <Button text="Add School" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}
