"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import Btn from "@/components/Button";
import { Info } from "lucide-react";
import { useRouter } from "next/navigation";
import Calendar from "@/components/Calendar";
import CalendarSetUp from "@/components/CalendarSetUp";
import SemesterSetUp from "@/components/SemesterSetUp";

// Mock data for dropdowns
const schools = [
  { id: "1", name: "Dr. Haddis" },
  { id: "2", name: "Bole Community" },
  { id: "3", name: "Addis Raey" },
  { id: "4", name: "Misrak Dil" },
  { id: "5", name: "Bole Highschool" },
];

const instructors = [
  { id: "1", name: "Abigya Ayele", expertise: "Web Development" },
  { id: "2", name: "Yanet Binyam", expertise: "Basic English" },
  { id: "3", name: "Maryamawit", expertise: "Digital Marketing" },
  { id: "4", name: "Beti Yohannes", expertise: "Web Development" },
  { id: "5", name: "Lix", expertise: "Marketing" },
  { id: "6", name: "Ahadu Sefefe", expertise: "Web Development" },
];

export default function NewSemesterPage() {
  const [selectedSchool, setSelectedSchool] = useState("");
  const [selectedMainInstructor, setSelectedMainInstructor] = useState("");
  const [selectedAssistants, setSelectedAssistants] = useState<string[]>([]);
  const [currentAssistant, setCurrentAssistant] = useState("");
  const thumbnail = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<any | null>(null);
  const [step, setStep] = useState(0); // start at step 0
  const router = useRouter();

  // Steps stored as component functions
  const formSteps = [SemesterSetUp, CalendarSetUp, StepThree];
  const CurrentFormComponent = formSteps[step];

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
            Create New Semester
          </h1>
          <nav className="flex space-x-2 m-6">
            {[
              { label: "Semester", step: 0 },
              { label: "Calendar", step: 1 },
              { label: "Schools", step: 2 },
              { label: "Courses", step: 3 },
            ].map((item, idx) => (
              <button
                key={item.label}
                type="button"
                onClick={() => setStep(idx)}
                className={`pb-1 border-b-2 transition-colors ${
                  step === idx
                    ? "border-green-600 text-green-700 font-semibold"
                    : "border-transparent text-gray-500 hover:text-green-700"
                }`}
                disabled={idx > formSteps.length} // disable future steps if not implemented
              >
                {item.label} /
              </button>
            ))}
          </nav>
        </div>
        <div className="m-6">
          {/* Render the current step */}
          <CurrentFormComponent />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between space-x-4 mt-8 pt-6 border-t border-green-100 m-6">
          <Button
            disabled={!step}
            className="bg-gray-50 hover:bg-gray-100 text-black border border-gray-300 cursor-pointer"
            onClick={() => setStep((prev) => Math.max(prev - 1, 0))}
          >
            Previous
          </Button>
          <Btn
            text={step === formSteps.length - 1 ? "Finish" : "Next"}
            onClick={() =>
              setStep((prev) => Math.min(prev + 1, formSteps.length - 1))
            }
          />
        </div>
      </div>
    </div>
  );
}

function StepTwo() {
  return <div className="p-4 border rounded">📝 Step Two Content</div>;
}

function StepThree() {
  return <div className="p-4 border rounded">✅ Final Step</div>;
}
