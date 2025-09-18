"use client";
import { BookOpen, GraduationCap, School, Users, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import Button from "./Button";
import Calendar from "./Calendar";
import { useSchoolStore } from "@/store/school";

const schools = [
  { id: "1", name: "Dr. Haddis" },
  { id: "2", name: "Bole Community" },
  { id: "3", name: "Addis Raey" },
  { id: "4", name: "Misrak Dil" },
  { id: "5", name: "Bole Highschool" },
];

const labAssistants = [
  { id: "1", name: "Abel Mekonnen" },
  { id: "2", name: "Saron Tadesse" },
  { id: "3", name: "Yonatan Fikru" },
  { id: "4", name: "Marta Kebede" },
];

const courses = [
  {
    id: "1",
    title: "Graphics Design",
    description:
      "Master the fundamentals of visual design using tools like Photoshop and Illustrator.",
    img: "/img/graphics.jpeg",
    numStuds: 120,
    start: "2025-09-01",
    end: "2025-10-15",
  },
  {
    id: "2",
    title: "Marketing",
    description:
      "Learn digital marketing, branding, and consumer behavior to grow any business online.",
    img: "/img/marketing.jpg",
    numStuds: 95,
    start: "2025-09-05",
    end: "2025-10-20",
  },
  {
    id: "3",
    title: "Web Development",
    description:
      "Build dynamic websites with HTML, CSS, JavaScript, and modern frameworks.",
    img: "/img/webdev.jpg",
    numStuds: 180,
    start: "2025-09-10",
    end: "2025-11-01",
  },
  {
    id: "4",
    title: "MIoT",
    description:
      "Explore Mobile and IoT development with real-world sensor integration and cloud control.",
    img: "/img/miot.png",
    numStuds: 70,
    start: "2025-09-12",
    end: "2025-10-30",
  },
  {
    id: "5",
    title: "Scratch Programming",
    description:
      "Introduce kids to programming using Scratch's fun and interactive drag-and-drop interface.",
    img: "/img/scratch.jpg",
    numStuds: 150,
    start: "2025-09-03",
    end: "2025-10-10",
  },
  {
    id: "6",
    title: "Know Your Globe",
    description:
      "An engaging journey across continents, cultures, and global challenges.",
    img: "/img/knowyourglobe.jpg",
    numStuds: 85,
    start: "2025-09-07",
    end: "2025-10-25",
  },
];

const instructors = [
  {
    id: "6",
    name: "Ahadu Sefefe",
    username: "ahadusefefe",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "ahadu.sefefe@example.et",
    phone: "+251-92-000-0006",
    status: "Active",
    enrolledDate: "July 3, 2018",
    fieldOfStudy: "Software Engineering",
  },
  {
    id: "7",
    name: "Lidya Sefefe",
    username: "lidyasefefe",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "lidya.sefefe@example.et",
    phone: "+251-92-000-0007",
    status: "Active",
    enrolledDate: "July 3, 2018",
    fieldOfStudy: "Business and Information System",
  },
  {
    id: "8",
    name: "Bethelhem Tefera",
    username: "bethelhemtefera",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "bethelhem.tefera@example.et",
    phone: "+251-92-000-0008",
    status: "Active",
    enrolledDate: "July 3, 2018",
    fieldOfStudy: "Architectural Engineering",
  },
  {
    id: "9",
    name: "Betehel Ayele",
    username: "betehelayele",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "betehel.ayele@example.et",
    phone: "+251-92-000-0009",
    status: "Active",
    enrolledDate: "July 3, 2018",
    fieldOfStudy: "Doctor of Medicine",
  },
  {
    id: "10",
    name: "Abigya Ayele",
    username: "abigyaayele",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "abigya.ayele@example.et",
    phone: "+251-92-000-0010",
    status: "Active",
    enrolledDate: "July 3, 2018",
    fieldOfStudy: "Software Engineering",
  },
  {
    id: "11",
    name: "Yeabsira Solomon",
    username: "yeabsirasolomon",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "yeabsira.solomon@example.et",
    phone: "+251-92-000-0011",
    status: "Active",
    enrolledDate: "July 3, 2018",
    fieldOfStudy: "Logistics",
  },
  {
    id: "12",
    name: "Bereket",
    username: "bereket",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "bereket@example.et",
    phone: "+251-92-000-0012",
    status: "Active",
    enrolledDate: "July 3, 2018",
    fieldOfStudy: "Business and Managment",
  },
  {
    id: "13",
    name: "Lewi Binyam",
    username: "lewibinyam",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "lewi.binyam@example.et",
    phone: "+251-92-000-0013",
    status: "Active",
    enrolledDate: "July 3, 2018",
    fieldOfStudy: "Architectural Engineering",
  },
  {
    id: "14",
    name: "Yanet Binyam",
    username: "yanetbinyam",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "yanet.binyam@example.et",
    phone: "+251-92-000-0014",
    status: "Active",
    enrolledDate: "July 3, 2018",
    fieldOfStudy: "Public relations",
  },
  {
    id: "15",
    name: "Yedi Binyam",
    username: "yedibinyam",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "yedi.binyam@example.et",
    phone: "+251-92-000-0015",
    status: "Active",
    enrolledDate: "July 3, 2018",
    fieldOfStudy: "Electrical Engineering",
  },
  {
    id: "16",
    name: "Gelila Yohannes",
    username: "gelilayohannes",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "gelila.yohannes@example.et",
    phone: "+251-92-000-0016",
    status: "Active",
    enrolledDate: "July 3, 2018",
    fieldOfStudy: "Logistics",
  },
  {
    id: "17",
    name: "Bethelehem Yohannes",
    username: "bethelehemyohannes",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "bethelehem.yohannes@example.et",
    phone: "+251-92-000-0017",
    status: "Active",
    enrolledDate: "July 3, 2018",
    fieldOfStudy: "Software Engineering",
  },
  {
    id: "18",
    name: "Beti Chung",
    username: "betichung",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "beti.chung@example.et",
    phone: "+251-92-000-0018",
    status: "Active",
    enrolledDate: "July 3, 2018",
    fieldOfStudy: "Economics",
  },
  {
    id: "19",
    name: "Eyob Mulugeta",
    username: "eyobmulugeta",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "eyob.mulugeta@example.et",
    phone: "+251-92-000-0019",
    status: "Active",
    enrolledDate: "July 3, 2018",
    fieldOfStudy: "Doctor of Medicine",
  },
  {
    id: "20",
    name: "Eyoab Samson",
    username: "eyoabsamson",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "eyoab.samson@example.et",
    phone: "+251-92-000-0020",
    status: "Active",
    enrolledDate: "July 3, 2018",
    fieldOfStudy: "Economics",
  },
  {
    id: "21",
    name: "Fekadeselassie Melaku",
    username: "fekadeselassiemelaku",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "fekadeselassie.melaku@example.et",
    phone: "+251-92-000-0021",
    status: "Active",
    enrolledDate: "July 3, 2018",
    fieldOfStudy: "Marketing",
  },
  {
    id: "22",
    name: "Babi Melaku",
    username: "babimelaku",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "babi.melaku@example.et",
    phone: "+251-92-000-0022",
    status: "Active",
    enrolledDate: "July 3, 2018",
    fieldOfStudy: "Civil Engineering",
  },
  {
    id: "23",
    name: "Nahom Temam",
    username: "nahomtemam",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "nahom.temam@example.et",
    phone: "+251-92-000-0023",
    status: "Active",
    enrolledDate: "July 3, 2018",
    fieldOfStudy: "Software Engineering",
  },
  {
    id: "24",
    name: "Beminet Zewdu",
    username: "beminetzewdu",
    avatar: "/placeholder.svg?height=40&width=40",
    email: "beminet.zewdu@example.et",
    phone: "+251-92-000-0024",
    status: "Active",
    enrolledDate: "July 3, 2018",
    fieldOfStudy: "Software Engineering",
  },
];

interface CourseInstructors {
  mainInstructors: string[];
  assistants: string[];
}

export default function ClassSetUp() {
  const { selectedSchools } = useSchoolStore();
  const [active, setActive] = useState(selectedSchools[0]);
  const [calendar, setCalendar] = useState<string>("1");
  const [calendarOpened, setCalendarOpened] = useState<boolean>(false);
  const [selectedLabAssistants, setSelectedLabAssistants] = useState<string[]>(
    []
  );
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [courseInstructors, setCourseInstructors] = useState<{
    [courseId: string]: CourseInstructors;
  }>({});
  const selectedSchoolsObj = schools.filter((school, index) =>
    selectedSchools.includes(school.id)
  );

  const toggleLabAssistants = (id: string) =>
    setSelectedLabAssistants((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  const removeLabAssistant = (id: string) =>
    setSelectedLabAssistants((prev) => prev.filter((s) => s !== id));

  const toggleCourses = (id: string) => {
    setSelectedCourses((prev) => {
      if (prev.includes(id)) {
        const newCourses = prev.filter((s) => s !== id);
        setCourseInstructors((prevInstructors) => {
          const newInstructors = { ...prevInstructors };
          delete newInstructors[id];
          return newInstructors;
        });
        return newCourses;
      } else {
        setCourseInstructors((prev) => ({
          ...prev,
          [id]: { mainInstructors: [], assistants: [] },
        }));
        return [...prev, id];
      }
    });
  };

  const toggleMainInstructors = (courseId: string, instructorId: string) => {
    setCourseInstructors((prev) => ({
      ...prev,
      [courseId]: {
        ...prev[courseId],
        mainInstructors: prev[courseId].mainInstructors.includes(instructorId)
          ? prev[courseId].mainInstructors.filter((id) => id !== instructorId)
          : [...prev[courseId].mainInstructors, instructorId],
      },
    }));
  };

  const removeMainInstructor = (courseId: string, instructorId: string) => {
    setCourseInstructors((prev) => ({
      ...prev,
      [courseId]: {
        ...prev[courseId],
        mainInstructors: prev[courseId].mainInstructors.filter(
          (id) => id !== instructorId
        ),
      },
    }));
  };

  const toggleAssistants = (courseId: string, instructorId: string) => {
    setCourseInstructors((prev) => ({
      ...prev,
      [courseId]: {
        ...prev[courseId],
        assistants: prev[courseId].assistants.includes(instructorId)
          ? prev[courseId].assistants.filter((id) => id !== instructorId)
          : [...prev[courseId].assistants, instructorId],
      },
    }));
  };

  const removeAssistant = (courseId: string, instructorId: string) => {
    setCourseInstructors((prev) => ({
      ...prev,
      [courseId]: {
        ...prev[courseId],
        assistants: prev[courseId].assistants.filter(
          (id) => id !== instructorId
        ),
      },
    }));
  };

  useEffect(() => {
    setSelectedLabAssistants([]);
    setSelectedCourses([]);
    setCourseInstructors({});
    setCalendarOpened(false);
  }, [active]);

  return (
    <div>
      <nav>
        <ul className="flex items-center gap-4">
          {selectedSchoolsObj.map((school) => (
            <li key={school.id}>
              <button
                className={`px-3 py-2 hover:bg-gradient-to-r border hover:from-green-500 hover:to-emerald-600 hover:text-white rounded-full flex gap-1 items-center ${
                  active === school.id
                    ? "text-white bg-gradient-to-r from-green-500 to-emerald-600"
                    : "text-green-700 bg-white border-green-400"
                }`}
                onClick={() => setActive(school.id)}
              >
                <School size={16} />
                <span>{school.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <Card className="border-green-100 mt-4 bg-white/50">
        <CardHeader>
          <CardTitle className="text-green-800 flex items-center">
            <BookOpen className="w-5 h-5 mr-2" />
            Basic Information
          </CardTitle>
          <CardDescription className="text-green-600">
            Essential details about class
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <div className="w-full">
              <Label htmlFor="term" className="text-green-800">
                Class Calendar *
              </Label>
              <div className="flex gap-3 items-center">
                <Select value={calendar} onValueChange={setCalendar}>
                  <SelectTrigger
                    id="term"
                    className="border-green-400 shadow-none focus-visible:ring-0 focus-visible:outline-none focus:outline-none focus:ring-0 w-1/2 mt-1"
                  >
                    <SelectValue placeholder="Select calendar" />
                  </SelectTrigger>
                  <SelectContent className="focus-visible:ring-green-400 focus-visible:ring-offset-2">
                    <SelectItem
                      value={"1"}
                      className="shadow-none focus-visible:ring-0 focus-visible:outline-none focus:outline-none focus:ring-0"
                    >
                      Y2025T1MC
                    </SelectItem>
                    <SelectItem
                      className="shadow-none focus-visible:ring-0 focus-visible:outline-none focus:outline-none focus:ring-0"
                      value="2"
                    >
                      Y2025T1SC
                    </SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  text="Add new"
                  onClick={() => setCalendarOpened(true)}
                />
              </div>
              {calendarOpened && (
                <div className="relative bg-[#eee] rounded md my-4">
                  <button
                    onClick={() => setCalendarOpened(false)}
                    className="absolute top-2 right-4"
                  >
                    <X className="text-sm text-gray-500" />
                  </button>
                  <Calendar />
                </div>
              )}
            </div>
          </div>
          <div className="space-y-1">
            <Label htmlFor="schools" className="text-green-800">
              Select Lab-Assistants *
            </Label>
            <div>
              <Select value={""} onValueChange={toggleLabAssistants}>
                <SelectTrigger
                  id="schools"
                  className="border-green-400 shadow-none focus-visible:ring-0 focus-visible:outline-none focus:outline-none focus:ring-0 w-1/2"
                >
                  <SelectValue placeholder="Select lab-assistants" />
                </SelectTrigger>
                <SelectContent className="focus-visible:ring-green-400 focus-visible:ring-offset-2">
                  {labAssistants.map((assis) => (
                    <SelectItem
                      key={assis.id}
                      value={assis.id}
                      className="focus-visible:ring-green-400 focus-visible:ring-offset-2 flex justify-between items-center"
                    >
                      <span>{assis.name}</span>
                      {selectedLabAssistants?.includes(assis.id) && (
                        <span> &#10003;</span>
                      )}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="flex flex-wrap gap-2 mt-5">
                {selectedLabAssistants.map((id) => {
                  const assistant = labAssistants.find((s) => s.id === id);
                  if (!assistant) return null;
                  return (
                    <div
                      key={id}
                      className="flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded-full"
                    >
                      <span>{assistant.name}</span>
                      <button onClick={() => removeLabAssistant(id)}>
                        <X size={14} />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="space-y-1">
            <Label htmlFor="schools" className="text-green-800">
              Select Courses *
            </Label>
            <div>
              <Select value="" onValueChange={toggleCourses}>
                <SelectTrigger
                  id="schools"
                  className="border-green-400 shadow-none focus-visible:ring-0 focus-visible:outline-none focus:outline-none focus:ring-0 w-1/2"
                >
                  <SelectValue placeholder="Select courses" />
                </SelectTrigger>
                <SelectContent className="focus-visible:ring-green-400 focus-visible:ring-offset-2">
                  {courses.map((course) => (
                    <SelectItem
                      key={course.id}
                      value={course.id}
                      className="focus-visible:ring-green-400 focus-visible:ring-offset-2 flex justify-between items-center"
                    >
                      <span>{course.title}</span>
                      {selectedCourses?.includes(course.id) && (
                        <span> &#10003;</span>
                      )}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="flex flex-wrap gap-2 mt-5">
                {selectedCourses.map((id) => {
                  const course = courses.find((s) => s.id === id);
                  if (!course) return null;
                  return (
                    <div
                      key={id}
                      className="flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded-full"
                    >
                      <span>{course.title}</span>
                      <button onClick={() => toggleCourses(id)}>
                        <X size={14} />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {selectedCourses.map((courseId) => {
            const course = courses.find((c) => c.id === courseId);
            if (!course) return null;
            return (
              <div key={courseId} className="space-y-4 border-t pt-4">
                <h3 className="text-lg font-semibold text-green-800">
                  Instructors for {course.title} *
                </h3>
                <div className="grid grid-cols-2 gap-x-5">
                  <div className="space-y-1">
                    <Label
                      htmlFor={`main-instructors-${courseId}`}
                      className="text-green-800"
                    >
                      Select Main-Instructors *
                    </Label>
                    <Select
                      value=""
                      onValueChange={(id) =>
                        toggleMainInstructors(courseId, id)
                      }
                    >
                      <SelectTrigger
                        id={`main-instructors-${courseId}`}
                        className="border-green-400 shadow-none focus-visible:ring-0 focus-visible:outline-none focus:outline-none focus:ring-0 w-full"
                      >
                        <SelectValue placeholder="Select main-instructors" />
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
                              {courseInstructors[
                                courseId
                              ]?.mainInstructors.includes(instructor.id) && (
                                <span> &#10003;</span>
                              )}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <div className="flex flex-wrap gap-2 mt-5">
                      {courseInstructors[courseId]?.mainInstructors.map(
                        (id) => {
                          const instructor = instructors.find(
                            (s) => s.id === id
                          );
                          if (!instructor) return null;
                          return (
                            <div
                              key={id}
                              className="flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded-full"
                            >
                              <span>{instructor.name}</span>
                              <button
                                onClick={() =>
                                  removeMainInstructor(courseId, id)
                                }
                              >
                                <X size={14} />
                              </button>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <Label
                      htmlFor={`assistants-${courseId}`}
                      className="text-green-800"
                    >
                      Select Assistants *
                    </Label>
                    <Select
                      value=""
                      onValueChange={(id) => toggleAssistants(courseId, id)}
                    >
                      <SelectTrigger
                        id={`assistants-${courseId}`}
                        className="border-green-400 shadow-none focus-visible:ring-0 focus-visible:outline-none focus:outline-none focus:ring-0 w-full"
                      >
                        <SelectValue placeholder="Select assistants" />
                      </SelectTrigger>
                      <SelectContent className="focus-visible:ring-green-400 focus-visible:ring-offset-2">
                        {instructors.map((instructor) => (
                          <SelectItem
                            key={instructor.id}
                            value={instructor.id}
                            className="focus-visible:ring-green-400 focus-visible:ring-offset-2 flex justify-between items-center"
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
                              {courseInstructors[courseId]?.assistants.includes(
                                instructor.id
                              ) && <span> &#10003;</span>}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <div className="flex flex-wrap gap-2 mt-5">
                      {courseInstructors[courseId]?.assistants.map((id) => {
                        const instructor = instructors.find((s) => s.id === id);
                        if (!instructor) return null;
                        return (
                          <div
                            key={id}
                            className="flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded-full"
                          >
                            <span>{instructor.name}</span>
                            <button
                              onClick={() => removeAssistant(courseId, id)}
                            >
                              <X size={14} />
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <Button text="Create Class" />
        </CardContent>
      </Card>
    </div>
  );
}
