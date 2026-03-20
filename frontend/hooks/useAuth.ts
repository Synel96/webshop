import { useAuthStore } from "../stores/authStore";
import { useMutation } from "@tanstack/react-query";
import api from "../lib/api";

export function useAuth() {
  return useAuthStore();
}

export function useLogin() {
  const login = useAuthStore((s) => s.login);
  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      login(email, password),
  });
}

export function useRegister() {
  return useMutation({
    mutationFn: (data: {
      email: string;
      password: string;
      first_name: string;
      last_name: string;
    }) => api.post("/auth/register/", data),
  });
}
