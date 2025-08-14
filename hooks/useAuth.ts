// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import { login, signup } from "@/lib/api/auth";

// export default function useAuth() {
//   const queryClient = useQueryClient();

//   // Fetch current authenticated user
//   const {
//     data: user,
//     isLoading: isUserLoading,
//     error: userError,
//   } = useQuery({
//     queryKey: ["user"],
//     queryFn: getCurrentUser,
//     staleTime: 1000 * 60 * 5, // optional: 5 minutes
//     retry: false, // optional: don't retry on failure (e.g. 401)
//   });

//   //  Signup mutation
//   const signupMutation = useMutation({
//     mutationFn: signup,
//     onSuccess: () => {
//       // Refresh the user info after successful signup
//       queryClient.invalidateQueries({ queryKey: ["user"] });
//     },
//   });

//   return {
//     user,
//     isUserLoading,
//     userError,

//     // Signup
//     signup: signupMutation.mutate,
//     signupAsync: signupMutation.mutateAsync,
//     signupStatus: signupMutation.status,
//   };
// }
