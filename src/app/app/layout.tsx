import { AppShell } from "@/components/app-shell";
import { requirePageSession } from "@/server/page-auth";

export const dynamic = "force-dynamic";

export default async function ProductLayout({ children }: { children: React.ReactNode }) {
  await requirePageSession();
  return <AppShell>{children}</AppShell>;
}
