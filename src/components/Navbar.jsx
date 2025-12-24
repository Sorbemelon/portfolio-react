import { Link } from "react-router-dom";
import { MessageContext } from "../context/MessageContext";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export default function Navbar() {

    return (
        <nav className="bg-linear-to-br from-black to-gray-500 text-white p-4 shadow-xl">
            <ul className="flex justify-center gap-8 text-2xl *:whitespace-nowrap">
                <li>
                    <Link to="/" >
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/owner">
                        Projects
                    </Link>
                </li>
            </ul>
        </nav>
    )
}