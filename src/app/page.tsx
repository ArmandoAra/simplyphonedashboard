import { auth } from "@/auth.config";
import { LogoutButton } from "./auth/components/logout/LogoutButton";
import WelcomeComponent from "./components/home/WelcomeComponent";

export default async function Home() {

  const session = await auth();
  if (!session?.user) {
    return <WelcomeComponent />;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="text-center">
        <LogoutButton />
      </div>
    </div>
  );
}
