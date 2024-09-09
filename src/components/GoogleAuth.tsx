'use client';
import { useSignInWithGoogle, useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '~/app/utils/firebase';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [_user, _loading, _error] = useAuthState(auth);
    const router = useRouter();

    useEffect(() => {
        const checkUserFirstTime = () => {
            if (user) {
                try {
                    const metadata = _user?.metadata;
                    const isFirstTime = metadata?.creationTime === metadata?.lastSignInTime;

                    if (isFirstTime) {
                        router.push('/userSignUp');
                    } else {
                        router.push('/');
                    }
                } catch (error) {
                    console.error('Error checking user:', error);
                }
            }
        };

        checkUserFirstTime();
    }, [user, router, _user]);

    if (error) {
        return (
            <div>
                There was some error. Please refresh the page or email contact@tecnoesis.co.in
            </div>
        );
    }
    if (loading || _loading) {
        return (
            <div className="flex w-screen h-screen justify-center items-center gap-3">
                User Loading....
            </div>
        )
    }
    if (user) {
        router.push("/");
        return null;
    }
    if (!_user) {
        return (
            <main className="flex min-h-screen flex-col items-center justify-center text-white">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => signInWithGoogle()}>
                    Sign In
                </button>
            </main>
        );
    }

    router.push('/');
    return null;
}


export default Login;
