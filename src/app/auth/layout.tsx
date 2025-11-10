import { redirect } from "next/navigation";
import { auth } from "@/auth.config";


export default async function AuthLayout({ children }: { children: React.ReactNode }) {

    const session = await auth();
    console.log("AuthLayout session:", session);


    return (
        <main className=" w-full h-screen flex justify-center items-center">
            {children}
        </main>
    );
}