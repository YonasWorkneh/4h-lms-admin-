// app/components/Protected.tsx
import { cookies } from "next/headers";
import ClientRedirect from "./ClientRedirect";

export default function Protected({ children }: { children: React.ReactNode }) {
  const token = cookies().get("access_token");

  return <ClientRedirect isAuthenticated={!!token}>{children}</ClientRedirect>;
}
