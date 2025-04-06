import ThemeController from "@/components/ThemeController";
import NavigationLinks from "@/components/NavigationLinks";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="navbar bg-neutral text-neutral-content shadow-sm">
            <div className="navbar-start">
                <div className="flex-none lg:hidden">
                    <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </label>
                </div>
                <Link href="/" className="btn btn-ghost text-xl">Asociación</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavigationLinks/>
                </ul>
            </div>
            <div className="navbar-end">
                <ThemeController/>
                <Link href="/login" className="btn">Iniciar sesión</Link>
            </div>
        </div>)
}