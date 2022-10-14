import { auth } from '../utils/firebase';
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from 'next/router';


export default function Dashboard() {
    const [user, loading] = useAuthState(auth);
    const route = useRouter();

    if (loading) return <p>Loading...</p>;
    if (!user) route.push("/auth/login");
    if (user)
        return (
            <div className="login">
                <h1>DASHBOARD</h1>
                <h3>Welcome {user.displayName}</h3>
                <button onClick={() => auth.signOut()}>SIGN OUT</button>
            </div>
        )
}
