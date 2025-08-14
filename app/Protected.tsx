// app/components/Protected.tsx
import { cookies } from "next/headers";
import ClientRedirect from "./ClientRedirect";

export default function Protected({ children }: { children: React.ReactNode }) {
  const token = cookies().get("access_token");
  console.log("cookiesss", token);

  return <ClientRedirect isAuthenticated={!!token}>{children}</ClientRedirect>;
}
