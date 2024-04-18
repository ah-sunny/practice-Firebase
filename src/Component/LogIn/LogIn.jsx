import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const LogIn = () => {
const {signInUser} = useContext(AuthContext)
const navigate = useNavigate()

    const handleLogIn =(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.password.value;
        console.log(email,pass);
// sign in with firebase using use context
        signInUser(email,pass)
        .then(result=>{
            console.log(result.user)
            e.target.reset()
            navigate('/home')
        })
        .catch(error=>{
            console.log(error)
        })
    }


    return (
        <div>
            <div className="hero bg-base-300">
                <div className="hero-content flex-col lg:flex-row-reverse">
                
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div>
                                <p>Create Account ?  <Link to='/register'>Register</Link> </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;