"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { X, School, GraduationCap } from "lucide-react";
import { useSchoolStore } from "@/store/school";
import Button from "./Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useState } from "react";

const schools = [
  { id: "1", name: "Dr. Haddis" },
  { id: "2", name: "Bole Community" },
  { id: "3", name: "Addis Raey" },
  { id: "4", name: "Misrak Dil" },
  { id: "5", name: "Bole Highschool" },
];

const instructors = [
  {
    id: "6",
    name: "Ahadu Sefefe",
    fieldOfStudy: "Software Engineering",
  },
  {
    id: "7",
    name: "Lidya Sefefe",
    fieldOfStudy: "Business and Information System",
  },
  {
    id: "8",
    name: "Bethelhem Tefera",
    fieldOfStudy: "Architectural Engineering",
  },
  {
    id: "9",
    name: "Betehel Ayele",
    fieldOfStudy: "Doctor of Medicine",
  },
  {
    id: "10",
    name: "Abigya Ayele",
    fieldOfStudy: "Software Engineering",
  },
  {
    id: "11",
    name: "Yeabsira Solomon",
    fieldOfStudy: "Logistics",
  },
  {
    id: "12",
    name: "Bereket",
    fieldOfStudy: "Business and Management",
  },
  {
    id: "13",
    name: "Lewi Binyam",
    fieldOfStudy: "Architectural Engineering",
  },
  {
    id: "14",
    name: "Yanet Binyam",
    fieldOfStudy: "Public Relations",
  },
  {
    id: "15",
    name: "Yedi Binyam",
    fieldOfStudy: "Electrical Engineering",
  },
  {
    id: "16",
    name: "Gelila Yohannes",
    fieldOfStudy: "Logistics",
  },
  {
    id: "17",
    name: "Bethelehem Yohannes",
    fieldOfStudy: "Software Engineering",
  },
  {
    id: "18",
    name: "Beti Chung",
    fieldOfStudy: "Economics",
  },
  {
    id: "19",
    name: "Eyob Mulugeta",
    fieldOfStudy: "Doctor of Medicine",
  },
  {
    id: "20",
    name: "Eyoab Samson",
    fieldOfStudy: "Economics",
  },
  {
    id: "21",
    name: "Fekadeselassie Melaku",
    fieldOfStudy: "Marketing",
  },
  {
    id: "22",
    name: "Babi Melaku",
    fieldOfStudy: "Civil Engineering",
  },
  {
    id: "23",
    name: "Nahom Temam",
    fieldOfStudy: "Software Engineering",
  },
  {
    id: "24",
    name: "Beminet Zewdu",
    fieldOfStudy: "Software Engineering",
  },
];

interface SchoolAssignments {
  supervisor: string | null;
  coordinator: string | null;
}

export default function SchoolSelect() {
  const { selectedSchools, toggleSchool, removeSchool } = useSchoolStore();
  const [schoolAssignments, setSchoolAssignments] = useState<{
    [schoolId: string]: SchoolAssignments;
  }>({});

  const toggleSupervisor = (schoolId: string, instructorId: string) => {
    setSchoolAssignments((prev) => ({
      ...prev,
      [schoolId]: {
        ...prev[schoolId],
        supervisor:
          prev[schoolId]?.supervisor === instructorId ? null : instructorId,
      },
    }));
  };

  const toggleCoordinator = (schoolId: string, instructorId: string) => {
    setSchoolAssignments((prev) => ({
      ...prev,
      [schoolId]: {
        ...prev[schoolId],
        coordinator:
          prev[schoolId]?.coordinator === instructorId ? null : instructorId,
      },
    }));
  };

  const removeSupervisor = (schoolId: string) => {
    setSchoolAssignments((prev) => ({
      ...prev,
      [schoolId]: {
        ...prev[schoolId],
        supervisor: null,
      },
    }));
  };

  const removeCoordinator = (schoolId: string) => {
    setSchoolAssignments((prev) => ({
      ...prev,
      [schoolId]: {
        ...prev[schoolId],
        coordinator: null,
      },
    }));
  };

  return (
    <Card className="border-green-200 bg-white/50 shadow-none">
      <CardHeader>
        <CardTitle className="text-green-800 flex items-center">
          <School className="w-5 h-5 mr-2" />
          Add Schools
        </CardTitle>
        <CardDescription className="text-green-600">
          Select schools and assign supervisors and coordinators for the
          semester
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-1">
          <Label htmlFor="schools" className="text-green-800">
            Select Schools
          </Label>
          <Select value="" onValueChange={toggleSchool}>
            <SelectTrigger
              id="schools"
              className="border-green-400 shadow-none focus-visible:ring-0 focus-visible:outline-none focus:outline-none focus:ring-0 w-1/2"
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
          <div className="flex flex-wrap gap-2 mt-5">
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
        </div>

        {selectedSchools.map((schoolId) => {
          const school = schools.find((s) => s.id === schoolId);
          if (!school) return null;
          return (
            <div key={schoolId} className="space-y-4 border-t pt-4">
              <h3 className="text-lg font-semibold text-green-800">
                Representatives for {school.name}
              </h3>
              <div className="grid grid-cols-2 gap-x-5">
                <div className="space-y-1">
                  <Label
                    htmlFor={`supervisor-${schoolId}`}
                    className="text-green-800"
                  >
                    Select Supervisor
                  </Label>
                  <Select
                    value=""
                    onValueChange={(id) => toggleSupervisor(schoolId, id)}
                  >
                    <SelectTrigger
                      id={`supervisor-${schoolId}`}
                      className="border-green-400 shadow-none focus-visible:ring-0 focus-visible:outline-none focus:outline-none focus:ring-0 w-full"
                    >
                      <SelectValue placeholder="Select supervisor" />
                    </SelectTrigger>
                    <SelectContent className="focus-visible:ring-green-400 focus-visible:ring-offset-2">
                      {instructors.map((instructor) => (
                        <SelectItem
                          key={instructor.id}
                          value={instructor.id}
                          className="focus-visible:ring-green-400 focus-visible:ring-offset-2"
                        >
                          <div className="flex items-center justify-between w-full gap-5">
                            <div>
                              <span>{instructor.name}</span>
                              {/* <span className="text-xs text-gray-400 flex items-center gap-1">
                                <GraduationCap
                                  className="text-green-500"
                                  size={15}
                                />
                                {instructor.fieldOfStudy}
                              </span> */}
                            </div>
                            {schoolAssignments[schoolId]?.supervisor ===
                              instructor.id && <span> &#10003;</span>}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {schoolAssignments[schoolId]?.supervisor && (
                      <div className="flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        <span>
                          {
                            instructors.find(
                              (i) =>
                                i.id === schoolAssignments[schoolId].supervisor
                            )?.name
                          }
                        </span>
                        <button onClick={() => removeSupervisor(schoolId)}>
                          <X size={14} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <div className="space-y-1">
                  <Label
                    htmlFor={`coordinator-${schoolId}`}
                    className="text-green-800"
                  >
                    Select Coordinator
                  </Label>
                  <Select
                    value=""
                    onValueChange={(id) => toggleCoordinator(schoolId, id)}
                  >
                    <SelectTrigger
                      id={`coordinator-${schoolId}`}
                      className="border-green-400 shadow-none focus-visible:ring-0 focus-visible:outline-none focus:outline-none focus:ring-0 w-full"
                    >
                      <SelectValue placeholder="Select coordinator" />
                    </SelectTrigger>
                    <SelectContent className="focus-visible:ring-green-400 focus-visible:ring-offset-2">
                      {instructors.map((instructor) => (
                        <SelectItem
                          key={instructor.id}
                          value={instructor.id}
                          className="focus-visible:ring-green-400 focus-visible:ring-offset-2"
                        >
                          <div className="flex items-center justify-between w-full gap-5">
                            <div>
                              <span>{instructor.name}</span>
                              <span className="text-xs text-gray-400 flex items-center gap-1">
                                <GraduationCap
                                  className="text-green-500"
                                  size={15}
                                />
                                {instructor.fieldOfStudy}
                              </span>
                            </div>
                            {schoolAssignments[schoolId]?.coordinator ===
                              instructor.id && <span> &#10003;</span>}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {schoolAssignments[schoolId]?.coordinator && (
                      <div className="flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        <span>
                          {
                            instructors.find(
                              (i) =>
                                i.id === schoolAssignments[schoolId].coordinator
                            )?.name
                          }
                        </span>
                        <button onClick={() => removeCoordinator(schoolId)}>
                          <X size={14} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <Button text="Save Schools" styles="w-fit" />
      </CardContent>
    </Card>
  );
}
