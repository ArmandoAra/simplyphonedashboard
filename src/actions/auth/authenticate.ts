import { AuthError } from "next-auth";
import { loginAfterRegister } from "./login";

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        await loginAfterRegister(
            formData.get('email') as string,
            formData.get('password') as string,
        );
        return "success";

    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CallbackRouteError':
                    return 'Invalid credentials.';
                case 'CredentialsSignin':
                    return 'Error signing in with credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}