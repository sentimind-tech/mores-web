import { redirect } from "next/navigation";

// This page only renders when the app is built statically (output: 'export')
export default function RootPage() {
  redirect("/en");
}

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
