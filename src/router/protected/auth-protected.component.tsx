// import {Navigate} from 'react-router-dom';
// import {Routes} from '../routes';
import {useDispatch} from 'react-redux';
import {IAuthProtectedRouteProps} from './auth-protected';
import {getToken} from '../../core/helpers/get-token';
import {useEffect} from 'react';
import {setUser} from '../../store/store.reducer';
const AuthProtectedComponent = ({children, layout = 'public'}: IAuthProtectedRouteProps) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const token  = getToken();
        if (token){
            dispatch(setUser(token));
        }
    }, []);
        switch (layout) {
            // case 'auth':
            //     return getToken() ? <Navigate to={Routes.home} replace /> : children;
            // case 'public':
            //     return getToken() ? children : <Navigate to={Routes.home} replace />;
            default:
                return children;
        }
};

export default AuthProtectedComponent;
