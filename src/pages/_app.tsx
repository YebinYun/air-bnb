import UserLayout from "@/layout/UserLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <UserLayout />;
}
