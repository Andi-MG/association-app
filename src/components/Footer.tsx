import YoutubeIcon from "@/components/icons/YoutubeIcon";
import FacebookIcon from "@/components/icons/FacebookIcon";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer footer-horizontal bg-neutral text-neutral-content items-center p-4">
            <aside className="grid-flow-col items-center">
                <p>Asociación</p>
            </aside>
            <nav className="grid-flow-col gap-4 justify-self-end">
                <Link href="https://www.youtube.com">
                    <YoutubeIcon/>
                </Link>
                <Link href="https://www.facebook.com">
                   <FacebookIcon/>
                </Link>
            </nav>
        </footer>
    )
}