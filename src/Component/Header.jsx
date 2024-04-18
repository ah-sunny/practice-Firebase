import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";

const Header = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="flex justify-center gap-10 text-xl font-semibold my-10">
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/log-in'>Practise Login</NavLink>
            <NavLink to='/register'>Register</NavLink>
            <NavLink to='/logIn'>Log In</NavLink>
            <NavLink to='/order'>Orders</NavLink>
            {
                user && <>
                    <NavLink to='/profile'>Profile</NavLink>
                    <NavLink >Dashboard</NavLink></>
            }
        </div>
    );
};

export default Header;