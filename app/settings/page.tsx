"use client";

import { BellDot, User, Camera, Mail, Lock, Save } from "lucide-react";
import React, { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const tabs = [
  { id: 1, name: "Account", icon: User },
  { id: 2, name: "Notification", icon: BellDot },
];

export default function page() {
  const [active, setActive] = useState<number>(1);
  const [email, setEmail] = useState("user@example.com");
  const [password, setPassword] = useState("");
  const [notifications, setNotifications] = useState(true);

  const handleSaveAccount = () => {
    // Handle save account logic
    console.log("Saving account changes...");
  };

  const handlePhotoUpload = () => {
    // Handle photo upload logic
    console.log("Uploading photo...");
  };

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold mb-2 text-[var(--heading)]">
          Settings
        </h1>
        <p className="text-gray-600 flex gap-2 items-center mt-2">
          Manage your account, and save your preferences.
        </p>
      </div>

      {/* main-content */}
      <div className="mt-10">
        {/* Tab Content */}
        <div className="mt-8">
          {active === 1 && (
            <div className="max-w-2xl">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                {/* Profile Photo Section */}
                <div className="mb-8">
                  <h3 className="font-medium mb-4 text-green-900">
                    Profile Photo
                  </h3>
                  <div className="flex items-center gap-6">
                    <div className="relative">
                      <Avatar className="h-20 w-28">
                        <AvatarImage src="/img/4h_logo.png" alt="Profile" />
                        <AvatarFallback className="text-lg">U</AvatarFallback>
                      </Avatar>
                      <Button
                        size="icon"
                        variant="outline"
                        className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                        onClick={handlePhotoUpload}
                      >
                        <Camera className="h-4 w-4 text-white" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Email Section */}
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-green-900 mb-2"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 border-green-400 focus-visible:ring-1 focus-visible:ring-green-400 focus-visible:ring-offset-2 py-7"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                {/* Password Section */}
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-green-900 mb-2"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 border-green-400 focus-visible:ring-1 focus-visible:ring-green-400 focus-visible:ring-offset-2 py-7"
                      placeholder="Enter new password"
                    />
                  </div>
                </div>

                {/* Save Button */}
                <div className="flex justify-end">
                  <Button
                    onClick={handleSaveAccount}
                    className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              </div>
            </div>
          )}

          {active === 2 && (
            <div className="max-w-2xl">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-xl font-semibold mb-6 text-gray-800">
                  Notification Settings
                </h2>

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-gray-700">
                        Push Notifications
                      </h3>
                      <p className="text-sm text-gray-600">
                        Receive notifications about important updates and
                        activities
                      </p>
                    </div>
                    <Switch
                      checked={notifications}
                      onCheckedChange={setNotifications}
                      className="data-[state=checked]:bg-green-600 data-[state=unchecked]:bg-gray-300"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-gray-700">
                        Email Notifications
                      </h3>
                      <p className="text-sm text-gray-600">
                        Get notified via email about system updates
                      </p>
                    </div>
                    <Switch
                      checked={notifications}
                      onCheckedChange={setNotifications}
                      className="data-[state=checked]:bg-green-600 data-[state=unchecked]:bg-gray-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
