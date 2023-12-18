import UserLayout from "@/layout/UserLayout";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <UserLayout />
      </QueryClientProvider>
    </RecoilRoot>
  );
}
