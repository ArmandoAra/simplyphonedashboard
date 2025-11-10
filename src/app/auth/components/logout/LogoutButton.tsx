import { logoutAction } from "@/actions/auth/logout";
// No se necesita importar nada del SDK de Firebase

export function LogoutButton() {
    return (
        <form action={logoutAction} className="w-40 h-32 bg-red-300 flex " >
            <button type="submit">
                Cerrar Sesión Server
            </button>
        </form>)
}