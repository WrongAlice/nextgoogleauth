import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';


export default function Login() {
    const [user, loading] = useAuthState(auth);
    const route = useRouter();
    // Sign in with Google
    const googleProvider = new GoogleAuthProvider();
    const GoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider)
            console.log(result.user)
            route.push('/dashboard'); // When signed in, redirects to dashboard.
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (user) route.push('/dashboard');
        else console.log("Login");
    }, [user])


    return (
        <div className="login">
            <h2>Join Today!</h2>
            <button onClick={GoogleLogin}>
                <FcGoogle /> Sign in with Google
            </button>
        </div>
    )
}
