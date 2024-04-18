import PropTypes from 'prop-types';
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Component/Provider/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)

    if(loading){
        return <div className='text-center mx-auto'> <span className="loading loading-spinner loading-lg text-secondary"></span></div>
    }
    if(user){
        return children;
    }
    return <Navigate to='/logIn'></Navigate>
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node,
}