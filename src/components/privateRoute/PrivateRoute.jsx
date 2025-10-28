import React, { use } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Loading from '../../pages/loading/Loading';
import { Navigate, useLocation } from 'react-router';


const PrivateRoute = ({children}) => {

    const {user, loading} = use(AuthContext)
    // console.log(user)
const location = useLocation()


 if(loading){
    return <Loading></Loading>
 }
 


    if(user && user?.email){
        return children;
    }


    return (
        <Navigate state={location.pathname} to='/auth/login'></Navigate>
    );
};

export default PrivateRoute;