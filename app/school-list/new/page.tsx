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
      <div className="container px-4 py-4 max-w-5xl">
        <Button
          text="Back"
          styles="!rounded-full px-6 py-1 mb-4"
          onClick={() => router.back()}
        />
        <div className="mb-6 lg:mb-8">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-900 mb-2">
            Add New School
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information */}
            <Card className="border-green-100">
              <CardHeader>
                <CardTitle className="text-green-800 text-lg lg:text-xl flex items-center">
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Basic Information
                </CardTitle>
                <CardDescription className="text-green-600 text-sm lg:text-base">
                  Essential details about school
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 lg:space-y-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="title"
                    className="text-green-800 text-sm lg:text-base"
                  >
                    School Name *
                  </Label>
                  <Input
                    id="title"
                    placeholder="e.g., Bole Community School"
                    className="border-green-400 focus-visible:ring-1 focus-visible:ring-green-400 focus-visible:ring-offset-2 text-sm lg:text-base"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="location"
                    className="text-green-800 text-sm lg:text-base"
                  >
                    School Location *
                  </Label>
                  <Input
                    id="location"
                    placeholder="e.g., ST Bole 12B"
                    className="border-green-400 focus-visible:ring-1 focus-visible:ring-green-400 focus-visible:ring-offset-2 text-sm lg:text-base"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="contact"
                    className="text-green-800 text-sm lg:text-base"
                  >
                    Contact *
                  </Label>
                  <Input
                    id="contact"
                    placeholder="e.g., +251 186261979"
                    className="border-green-400 focus-visible:ring-1 focus-visible:ring-green-400 focus-visible:ring-offset-2 text-sm lg:text-base"
                  />
                </div>

                <div className="space-y-3">
                  <p className="text-sm font-medium leading-none text-green-800">
                    School Personnel
                  </p>

                  {/* Existing personnels list */}
                  {personnels.length > 0 && (
                    <div className="space-y-2">
                      {personnels.map((p, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between bg-green-50 border border-green-200 rounded-md px-3 py-2"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-green-700 text-xs sm:text-sm font-medium">
                              {p.name}
                            </span>
                            <Badge
                              variant="outline"
                              className="text-green-600 text-xs sm:text-sm"
                            >
                              {p.role}
                            </Badge>
                          </div>
                          <button
                            type="button"
                            onClick={() => removePersonnel(idx)}
                            className="rounded-full bg-white border border-green-300 hover:bg-green-100 flex-shrink-0 w-4 h-4 grid place-items-center sm:w-5 sm:h-5"
                          >
                            <X className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Add new personnel */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
                    <Input
                      placeholder="Name"
                      value={newPersonnel.name}
                      onChange={(e) =>
                        setNewPersonnel((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      className="border-green-400 focus-visible:ring-1 focus-visible:ring-green-400 focus-visible:ring-offset-2 text-sm lg:text-base flex-1"
                    />
                    <Select
                      value={newPersonnel.role}
                      onValueChange={(val) =>
                        setNewPersonnel((prev) => ({ ...prev, role: val }))
                      }
                    >
                      <SelectTrigger className="border-green-400 focus-visible:ring-1 focus-visible:ring-green-400 focus-visible:ring-offset-2 w-full sm:w-48 lg:w-64 text-sm lg:text-base">
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
                      className="p-2 rounded-full bg-green-100 text-green-700 hover:bg-green-200 flex-shrink-0 w-full sm:w-auto flex items-center justify-center"
                    >
                      <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 order-first lg:order-last">
            {/* School Image */}
            <Card className="border-green-100">
              <CardHeader>
                <CardTitle className="text-green-800 text-lg lg:text-xl">
                  School Image
                </CardTitle>
                <CardDescription className="text-green-600 text-sm lg:text-base">
                  Optional school thumbnail
                </CardDescription>
              </CardHeader>
              <CardContent onClick={() => thumbnail?.current?.click()}>
                {image?.file ? (
                  <div className="relative w-fit mx-auto">
                    <Image
                      src={image.url}
                      alt="school-thumbnail"
                      width={200}
                      height={200}
                      className="rounded-lg"
                    />
                    <button className="rounded-lg p-1 absolute top-2 right-2 bg-white border border-green-400 shadow-sm">
                      <Pencil className="h-4 w-4 text-green-400" />
                    </button>
                  </div>
                ) : (
                  <div className="border-2 border-dashed border-green-200 rounded-lg p-6 sm:p-8 text-center hover:border-green-300 transition-colors cursor-pointer">
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
        <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 mt-6 lg:mt-8 pt-6 border-t border-green-100">
          <Button
            text="Add School"
            styles="w-full sm:w-auto"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
}
