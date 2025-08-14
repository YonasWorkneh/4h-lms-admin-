"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "./loading";

export default function ClientRedirect({
  isAuthenticated,
  children,
}: {
  isAuthenticated: boolean;
  children: React.ReactNode;
}) {
  console.log("Authentication Status", isAuthenticated);
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const paths = [
    "/dashboard",
    "/course-list",
    "/semester",
    "/setting",
    "/course-list/new",
    "/school-list/new",
    "/semester/new",
  ];
  const pathName = usePathname();
  const redirect = paths.find((path) => pathName === path);
  const isLogged = localStorage.getItem("isLogged");

  useEffect(() => {
    if (isAuthenticated || isLogged) {
      console.log("is it getting here");
      setMounted(true);
      router.push(redirect);
    } else {
      setMounted(true);
      router.push("/login");
    }
  }, [isAuthenticated]);

  if (!mounted) return <Loading />;
  return <>{children}</>;
}
