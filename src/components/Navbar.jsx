import { Link } from "react-router-dom";
import { MessageContext } from "../context/MessageContext";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export default function Navbar() {

    return (
        <nav className="fixed bg-white text-black p-4 shadow-xl top-0 left-0 w-full overflow-hidden z-99 h-16">
            <ul className="flex justify-center gap-8 text-2xl *:whitespace-nowrap">
                <li>
                    <Link to="/" >
                        Home
                    </Link>
                </li>
            </ul>
        </nav>
    )
}