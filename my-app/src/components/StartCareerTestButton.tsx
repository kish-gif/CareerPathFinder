"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function StartCareerTestButton({ label }: { label: string }) {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  const handleClick = () => {
    if (isAuthenticated) {
      router.push("/career-test");
    } else {
      router.push("/register");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="
        px-8 py-3 text-lg font-medium rounded-md transition-colors
        bg-gray-900 text-white hover:bg-gray-700
        dark:bg-gray-100 dark:text-black dark:hover:bg-gray-300
      "
    >
      {label}
    </button>
  );
}