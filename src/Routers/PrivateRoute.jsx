
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if(loading){
        return <div className='text-center mt-32'><span className='loading loading-bars loading-lg'></span></div>
    }

    if(user){
        return children;
    }

    return (<Navigate state={location.pathname} to={'/login'}></Navigate>);
};

PrivateRoute.propTypes = {
    children:PropTypes.node,
};

export default PrivateRoute;