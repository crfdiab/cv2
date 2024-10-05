import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";   

export default function Home() {
  return (
    <div className="min-h-[86.5vh] flex flex-col justify-center items-center text-center px-2 py-8">
      <h1 className="text-4xl font-bold mb-4 sm:text-7xl">
          AI Curator
      </h1>
      <p className="max-w-[600px] text-foreground mb-8 sm:text-base">
        AI Directory Of Curated <b>AI Tools</b> Organized By Category, Pricing, Features, and More. As AI Tools Are Growing Exponentially, It&apos;s Hard To Keep Up. We&apos;ve Solved This By Creating A Curated Directory Of AI Tools.
      </p>
      <div className="flex items-center gap-5">
        <Link
          href="/ai-tools"
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Browse AI Tools
        </Link>
      </div>
    </div>
  );
}