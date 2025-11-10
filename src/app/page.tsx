import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth.config";
import { LogoutButton } from "./auth/components/logout/LogoutButton";

export default async function Home() {

  const session = await auth();
  console.log("AuthLayout session:", session);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="text-center">
        <LogoutButton />
        <h1 className="mb-8 text-4xl font-bold text-gray-800 dark:text-gray-200">
          Welcome to Simply Phone Dashboard
        </h1>
      </div>
      <Link href="/auth/register" className="mt-8 inline-block rounded bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
        Register
      </Link>
      <Link href="/auth/login" className="mt-8 ml-4 inline-block rounded bg-green-600 px-6 py-3 text-white hover:bg-green-700">
        Login
      </Link>
    </div>
  );
}
