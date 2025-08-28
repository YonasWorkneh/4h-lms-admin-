"use client";

import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { login } from "@/lib/api/auth";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { handleSubmit, register } = useForm();
  const queryClient = useQueryClient();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      setLoading(true);
      const result = await login(data);
      if (!result.error) {
        queryClient.setQueryData(["user"], result.user);
        router.push("/");
        localStorage.setItem("isLogged", JSON.stringify(true));
      }
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="h-full flex items-center justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Card className="w-[450px]">
        <CardHeader>
          <div className="flex justify-center">
            <Image
              src={"/img/4h_logo.png"}
              alt="4h-logo"
              width={100}
              height={100}
            />
          </div>
          <CardTitle className="text-lg md:text-xl">Sign In</CardTitle>
          <CardDescription className="text-xs md:text-sm">
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                className="focus-visible:ring-1 focus-visible:ring-green-400 focus-visible:ring-offset-2"
                {...register("email")}
              />
            </div>
            <div className="grid gap-2 relative">
              {/* forgot password not sure if we are going to implement it */}
              {/* 
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div> */}

              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="password"
                autoComplete="password"
                className="focus-visible:ring-1 focus-visible:ring-green-400 focus-visible:ring-offset-2"
                {...register("password")}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-black"
                tabIndex={-1} // Prevent focus jump
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 p-2 px-4 rounded-md text-white"
              disabled={loading}
            >
              {loading ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <p> Login </p>
              )}
            </Button>
            {/* social provider but removed for less work 😁 */}
            {/* <div
              className={cn(
                "w-full gap-2 flex items-center",
                "justify-between flex-col"
              )}
            >
              <Button
                variant="outline"
                className={cn("w-full gap-2")}
                disabled={loading}
                // onClick={async () => {
                //   await signIn.social(
                //     {
                //       provider: "google",
                //       callbackURL: "/dashboard",
                //     },
                //     {
                //       onRequest: (ctx) => {
                //         setLoading(true);
                //       },
                //       onResponse: (ctx) => {
                //         setLoading(false);
                //       },
                //     }
                //   );
                // }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="0.98em"
                  height="1em"
                  viewBox="0 0 256 262"
                >
                  <path
                    fill="#4285F4"
                    d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                  ></path>
                  <path
                    fill="#34A853"
                    d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                  ></path>
                  <path
                    fill="#FBBC05"
                    d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"
                  ></path>
                  <path
                    fill="#EB4335"
                    d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                  ></path>
                </svg>
                Sign in with Google
              </Button>
            </div> */}
          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </form>
  );
}
