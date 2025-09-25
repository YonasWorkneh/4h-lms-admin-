import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { login, signup } from "@/lib/api/auth";
import { useToast } from "@/components/ui/use-toast";

export default function useAuth() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const { mutate: signin } = useMutation({
    mutationFn: login,
    onSuccess: () => toast({ title: "✅ Logged in succesfully!" }),
    onError: () =>
      toast({
        title: "❌ Login Error",
        description: "Something went wrong. Please try again.",
      }),
  });

  //  Signup mutation
  const signupMutation = useMutation({
    mutationFn: signup,
    onSuccess: () => {
      // Refresh the user info after successful signup
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  return {
    signin,
  };
}
