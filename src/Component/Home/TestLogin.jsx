import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
// import auth from "../../Firebase/firebase.init";
import auth from "../../Firebase/firebase.init";
import HeroLogin from "./HeroLogin";


const TextLogin = () => {
    const [user, setUser] = useState(null)
    // const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    const GithubProvider = new GithubAuthProvider()

    const handleTestGoogleLogIn = () => {
        console.log('clicked')

        signInWithPopup(auth, provider)
            .then(result => {
                const LoggedUser = result.user;
                console.log(LoggedUser)
                setUser(LoggedUser)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const handleGithubLogin = () => {
        signInWithPopup(auth, GithubProvider)
            .then(result => {
                const githubLoggedUser = result.user;
                setUser(githubLoggedUser)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const handleEmailPass = (e) => {
        e.preventDefault();
        // const pass = e.target.
        const gmail = e.target.email.value;
        const password = e.target.password.value;
        // console.log('connect',gmail)
        // console.log('connect',password)
        createUserWithEmailAndPassword(auth, gmail, password)
            .then(result => {
                const emailPassUser = result.user;
                setUser(emailPassUser)
                console.log(emailPassUser)
            })
            .catch(error => {
                console.log(error.message)
            })

    }

    // logout
    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div >
            <div>
                {
                    user ?
                        <button onClick={handleLogOut} className='font-bold px-5 p-3 bg-orange-300 mt-7 rounded-md'>Log Out</button> :
                        <div className="">
                            <button onClick={handleTestGoogleLogIn} className='font-bold px-5 p-3 bg-orange-300 mt-7 mr-5 rounded-md'>GOOGLE LOG-IN</button>
                            <button onClick={handleGithubLogin} className='font-bold px-5 p-3 bg-orange-300 mt-7 rounded-md'>GitHub LOG-IN</button>

                            <div className="mt-5">
                                <HeroLogin handleEmailPass={handleEmailPass}>

                                </HeroLogin>
                            </div>
                        </div>


                }
            </div>
            <div>
                {
                    user &&
                    <div className="card bg-base-300 mt-10 shadow-xl ">
                        <figure className="h-44"><img src={user?.photoURL} className="h-full rounded-lg" /></figure>
                        <div className="card-body text-left">
                            <h2 className="card-title">{user?.displayName}</h2>
                            <p>Gmail : {user?.email}</p>
                            <h2 className="card-title">{user?.providerData[0]?.providerId}</h2>

                        </div>
                    </div>
                }
            </div>


        </div>
    );
};

export default TextLogin;