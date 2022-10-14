import Link from "next/link";
// import Login from "../pages/auth/Login";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';


export default function Nav() {

    const [user, loading] = useAuthState(auth);

    return (
        <nav className="nav-bar">
            <Link href={"/"}>Home</Link>
            <ul>
                {!user && (
                    <Link href={"/auth/login"}>
                        <a className="join-now">Join now!</a>
                    </Link>
                )}
                {user && (
                    <div>
                        <Link href={'/dashboard'}>
                            <img src={user.photoURL}
                                alt="avatar"
                                referrerPolicy="no-referrer"
                            />
                        </Link>
                    </div>
                )}
            </ul>
        </nav>
    )
}
