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
    <div className="min-h-screen">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 text-[var(--heading)]">
          Settings
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Manage your account, and save your preferences.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg text-sm sm:text-base font-medium transition-colors ${
                  active === tab.id
                    ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                {tab.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      <div className="space-y-6">
        {active === 1 && (
          <div className="max-w-2xl">
            <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
              {/* Profile Photo Section */}
              <div className="mb-6 sm:mb-8">
                <h3 className="font-medium mb-4 text-green-900 text-sm sm:text-base">
                  Profile Photo
                </h3>
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="relative">
                    <Avatar className="h-16 w-20 sm:h-20 sm:w-28">
                      <AvatarImage src="/img/4h_logo.png" alt="Profile" />
                      <AvatarFallback className="text-sm sm:text-lg">
                        U
                      </AvatarFallback>
                    </Avatar>
                    <Button
                      size="icon"
                      variant="outline"
                      className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                      onClick={handlePhotoUpload}
                    >
                      <Camera className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Email Section */}
              <div className="mb-4 sm:mb-6">
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
                    className="pl-10 border-green-400 focus-visible:ring-1 focus-visible:ring-green-400 focus-visible:ring-offset-2 py-4 sm:py-7 text-sm sm:text-base"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Password Section */}
              <div className="mb-6 sm:mb-8">
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
                    className="pl-10 border-green-400 focus-visible:ring-1 focus-visible:ring-green-400 focus-visible:ring-offset-2 py-4 sm:py-7 text-sm sm:text-base"
                    placeholder="Enter new password"
                  />
                </div>
              </div>

              {/* Save Button */}
              <div className="flex flex-col sm:flex-row justify-end gap-3">
                <Button
                  onClick={handleSaveAccount}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 w-full sm:w-auto"
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
            <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-800">
                Notification Settings
              </h2>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-medium text-gray-700 mb-1">
                      Push Notifications
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Receive notifications about important updates and
                      activities
                    </p>
                  </div>
                  <Switch
                    checked={notifications}
                    onCheckedChange={setNotifications}
                    className="data-[state=checked]:bg-green-600 data-[state=unchecked]:bg-gray-300 flex-shrink-0"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-medium text-gray-700 mb-1">
                      Email Notifications
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Get notified via email about system updates
                    </p>
                  </div>
                  <Switch
                    checked={notifications}
                    onCheckedChange={setNotifications}
                    className="data-[state=checked]:bg-green-600 data-[state=unchecked]:bg-gray-300 flex-shrink-0"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-medium text-gray-700 mb-1">
                      SMS Notifications
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Receive important alerts via SMS
                    </p>
                  </div>
                  <Switch
                    checked={notifications}
                    onCheckedChange={setNotifications}
                    className="data-[state=checked]:bg-green-600 data-[state=unchecked]:bg-gray-300 flex-shrink-0"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
