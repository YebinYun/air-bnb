import UserLayout from "@/layout/UserLayout";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserLayout />
    </QueryClientProvider>
  );
}
