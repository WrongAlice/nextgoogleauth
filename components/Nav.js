import Link from "next/link";
// import Login from "../pages/auth/Login";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';


export default function Nav() {

    const [user, loading] = useAuthState(auth);

    return (
        <section className="headzone">
        <nav className="nav">
             <div className="logo">
          <i className="fas fa-tractor"></i>
        </div>
            <Link href={"/"}>Home</Link>
            <Link href="/mission">Mission</Link>
            <a href="/volunteer">Volunteer</a>
            <a href="/donate">Donate</a>
            <a href="/subscriptions">Subscriptions</a>
            <a href="/learn">Learn</a>
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
        </section>
    )
}
