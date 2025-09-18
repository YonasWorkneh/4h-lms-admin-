"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Btn from "@/components/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { Upload, Pencil } from "lucide-react";

const fields = [
  "Marketing",
  "Web Development",
  "Scratch",
  "MIoT",
  "3D Modelling",
];

export default function StudentRegistrationForm() {
  const [status, setStatus] = useState("Active");
  const [grade, setGrade] = useState("");
  const [image, setImage] = useState<any | null>(null);
  const thumbnail = useRef<HTMLInputElement>(null);
  const router = useRouter();

  return (
    <div className="container mx-auto px-4 py-4">
      <Btn
        text="back"
        styles="!rounded-full !px-6 !py-1 mb-4"
        onClick={() => router.back()}
      />

      <h1 className="text-2xl font-bold text-green-900 mb-6">
        Register New Student
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-green-100">
            <CardHeader>
              <CardTitle className="text-green-800">
                Student Information
              </CardTitle>
              <CardDescription className="text-green-600">
                Enter basic student details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-green-800">Name *</Label>
                  <Input placeholder="Full Name" className="border-green-200" />
                </div>
                <div className="space-y-2">
                  <Label className="text-green-800">Grade *</Label>
                  <Input
                    type="number"
                    placeholder="e.g 12"
                    className="border-green-200"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-green-800">Phone *</Label>
                  <Input placeholder="phone no." className="border-green-200" />
                </div>
                <div className="space-y-2">
                  <Label className="text-green-800">Email *</Label>
                  <Input
                    type="email"
                    placeholder="example@example.com"
                    className="border-green-200"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-green-800">Enrolled Date *</Label>
                  <Input type="date" className="border-green-200" />
                </div>
                <div className="space-y-2">
                  <Label className="text-green-800">End Date</Label>
                  <Input type="date" className="border-green-200" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div>
          <Card className="border-green-100">
            <CardHeader>
              <CardTitle className="text-green-800">Student Image</CardTitle>
              <CardDescription className="text-green-600">
                Upload a profile photo
              </CardDescription>
            </CardHeader>
            <CardContent onClick={() => thumbnail?.current.click()}>
              {image?.file ? (
                <div className="relative w-fit">
                  <Image
                    src={image.url}
                    alt="student-image"
                    width={200}
                    height={200}
                  />
                  <button className="absolute top-0 -right-5 bg-gray-50 border border-green-400 p-1 rounded-lg">
                    <Pencil className="h-5 w-5 text-green-400" />
                  </button>
                </div>
              ) : (
                <div className="border-2 border-dashed border-green-200 p-8 text-center rounded-lg cursor-pointer">
                  <Upload className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <p className="text-green-600">
                    Click or drag image to upload
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
                const files = Array.from(e.target.files || []).map((file) => ({
                  file,
                  url: URL.createObjectURL(file),
                }));
                setImage(files[0]);
              }}
            />
          </Card>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end mt-8 pt-6 border-t border-green-100">
        <Btn text="Register Student" />
      </div>
    </div>
  );
}
