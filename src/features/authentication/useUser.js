export function useUser() {
  // const { isLoading, data: user } = useQuery({
  //   queryKey: ["user"],
  //   queryFn: getCurrentUser,
  // });

  const user = {
    user_metadata: { fullName: "Gus" },
    avatar: null,
    email: "fakename@gmail.com",
  };

  return {
    isLoading: false,
    user,
    isAuthenticated: user?.role === "authenticated",
  };
}
