import UserLayout from "@/layout/UserLayout";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import App from "./_app";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}
