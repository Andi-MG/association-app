import Link from "next/link";

export default function NavigationLinks() {
    return <>
        <li><Link href="/">Anuncios</Link></li>
        <li><a>Salas</a></li>
        <li><a>Inventario</a></li>
    </>
}