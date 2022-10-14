import Link from "next/link";
// import Login from "../pages/auth/Login";

// py-2 px-4 text-lg bg-blue-500 text-red rounded-lg font-medium ml-8

export default function Nav() {
    return (
        <nav className="nav-bar">
            <Link href={"/"}>Home</Link>
            <ul>
                <Link href={"/auth/login"}>
                    <a className="join-now">Join now!</a>
                </Link>
            </ul>
        </nav>
    )
}
