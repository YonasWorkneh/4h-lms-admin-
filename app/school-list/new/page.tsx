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
  const [image, setImage] = useState<any | null>(null); // Add at the top of your component
  const [personnels, setPersonnels] = useState<
    { name: string; role: string }[]
  >([]);
  const [newPersonnel, setNewPersonnel] = useState({ name: "", role: "" });

  const addPersonnel = () => {
    if (newPersonnel.name && newPersonnel.role) {
      setPersonnels([...personnels, newPersonnel]);
      setNewPersonnel({ name: "", role: "" });
    }
  };

  const removePersonnel = (index: number) => {
    setPersonnels(personnels.filter((_, i) => i !== index));
  };

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
                      className="border-green-400 focus-visible:ring-1 focus-visible:ring-green-400 focus-visible:ring-offset-2"
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
                      className="border-green-400 focus-visible:ring-1 focus-visible:ring-green-400 focus-visible:ring-offset-2"
                    />
                  </div>
                </div>
                <div>
                  <div className="space-y-2">
                    <Label htmlFor="contact" className="text-green-800">
                      Contact *
                    </Label>
                    <Input
                      id="contact"
                      placeholder="e.g., +251 186261979"
                      className="border-green-400 focus-visible:ring-1 focus-visible:ring-green-400 focus-visible:ring-offset-2"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium leading-none text-green-800">
                    School Personnels
                  </p>

                  {/* Existing personnels list */}
                  {personnels.length > 0 && (
                    <div className="space-y-2">
                      {personnels.map((p, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-2 bg-green-50 border border-green-200 rounded-md px-3 py-2"
                        >
                          <span className="text-green-700">{p.name}</span>
                          <Badge variant="outline" className="text-green-600">
                            {p.role}
                          </Badge>
                          <button
                            type="button"
                            onClick={() => removePersonnel(idx)}
                            className="ml-auto p-1 rounded-full bg-white border border-green-300 hover:bg-green-100"
                          >
                            <X className="w-4 h-4 text-green-600" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Add new personnel */}
                  <div className="flex items-center space-x-2 mt-2">
                    <Input
                      placeholder="Name"
                      value={newPersonnel.name}
                      onChange={(e) =>
                        setNewPersonnel((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      className="border-green-400 focus-visible:ring-1 focus-visible:ring-green-400 focus-visible:ring-offset-2"
                    />
                    <Select
                      value={newPersonnel.role}
                      onValueChange={(val) =>
                        setNewPersonnel((prev) => ({ ...prev, role: val }))
                      }
                    >
                      <SelectTrigger className="border-green-400 shadow-none focus-visible:ring-0 focus-visible:outline-none focus:outline-none focus:ring-0 w-1/2 mt-1">
                        <SelectValue placeholder="Select Role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Director">Director</SelectItem>
                        <SelectItem value="Assistant Director">
                          Assistant Director
                        </SelectItem>
                        <SelectItem value="Lab Assistant">
                          Lab Assistant
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <button
                      type="button"
                      onClick={addPersonnel}
                      className="p-2 rounded-full bg-green-100 text-green-700 hover:bg-green-200"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
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
