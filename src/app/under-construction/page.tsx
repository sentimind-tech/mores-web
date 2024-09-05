import { redirect } from "next/navigation";

export default async function UnderConstruction({ params }: any) {
  redirect("/");
}
