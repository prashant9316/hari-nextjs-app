"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  return (
    <header className="bg-white shadow sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1
          className="text-2xl font-bold text-blue-600 cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        >
          E-Commerce
        </h1>
        <nav className="flex items-center space-x-4">
          <Link href="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
            onClick={() => {
              router.push("/signup");
            }}
          >
            Sign Up
          </button>
        </nav>
      </div>
    </header>
  );
}
