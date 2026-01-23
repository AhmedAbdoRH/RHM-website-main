import { cn } from "@/lib/utils";
import Link from "next/link";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" aria-label="RHM للحلول الرقمية - الرئيسية">
        <div className={cn("flex items-center gap-2 font-headline tracking-tight", className)} dir="rtl">
            <span className="text-2xl font-black text-white">
                RHM
            </span>
            <span className="text-lg font-light text-white">
                للحلول الرقمية
            </span>
        </div>
    </Link>
  );
}
