"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Loading from "./loading";

export default function Dashboard() {
  const router = useRouter();
  useEffect(() => {
    router.push("/dashboard");
  }, []);
  return <Loading />;
}
