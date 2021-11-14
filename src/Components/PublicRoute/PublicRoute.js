import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import * as authSelector from '../../redux/auth/authSelector';

const PublicRoute = ({ children, urlFToRedirect, ...props }) => {
    const isLoggedIn = useSelector(authSelector.getIsLoggedIn)
    return <Route {...props}>{isLoggedIn ?<Redirect to={urlFToRedirect}/>:children}</Route>
}

export default PublicRoute;