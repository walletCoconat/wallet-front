import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as authSelector from '../../redux/auth/authSelector';


const PrivateRoute = ({ children, ...props}) => {
    const isLoggedIn = useSelector(authSelector.getIsLoggedIn);
    console.log(111111111111111111111111111, isLoggedIn);
    console.log(2222222222222222, {...props}, children)
    return <Route {...props}>{isLoggedIn ? children : <Redirect to="/login"/>}</Route>

}

export default PrivateRoute;