import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Register = () => {
const {createUser } = useContext(AuthContext)

const handleRegister = (e)=>{
    e.preventDefault();
    const name = e.target.name.value;
    const Email = e.target.email.value;
    const Pass = e.target.password.value;
    console.log(name,Email,Pass);

    //create user with firebase using useContext
    createUser(Email,Pass)
    .then(result =>{
        console.log(result.user)
    })
    .catch(error=>{
        console.error(error.message)
    })
}


    return (
        <div className="hero bg-base-300">
        <div className="hero-content flex-col lg:flex-row-reverse">
            
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Your name" name="name" className="input input-bordered" required />
                    </div>
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
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <div>
                        <p>Already have ? <Link to='/logIn'>Log In</Link> </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Register;