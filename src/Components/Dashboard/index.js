import DashboardMobileNav from "./DashboardMobileNav";
import { Switch, Route } from 'react-router';
import './Dashboard.scss';
import { Suspense } from "react";
import Statistics from "./DashboardStatistics";
import Home from "./DashboardHome";
import ExchangeRates from './DashboardExchange';
import Media from 'react-media';
import Container from '../Container';
import PrivateRoute from '../PrivatRoute/PrivatRoute';


const DashboardRoutes = () =>
<div className='Dashboard_bgc'>
<Container>
    
        <div className='Dashboard_container'>
            <Media queries={{
                small: "(max-width: 767px)",
                medium: "(min-width: 768px) and (max-width: 1279px)",
                large: "(min-width: 1280px)"
                }}>
                {matches => (
                    <div>
{/* For mobile screen */}
                    {matches.small && 
                               <>
                                <DashboardMobileNav/>
                                <Suspense>
                                    <Switch>
                                        <PrivateRoute exact path="/">
                                        <Home/>
                                        </PrivateRoute>
                                        <PrivateRoute path="/statistics">
                                            <Statistics/>
                                        </PrivateRoute>
                                        <PrivateRoute path="/exchange_rates">
                                            <ExchangeRates/>
                                        </PrivateRoute>
                                    </Switch>
                                </Suspense>
                                </>}
{/* For mobile tablet */}
                    {matches.medium && 
                            <>    
                                {/* <DashboardMobileNav/> */}
                                <Suspense>
                                    <Switch>
                                        <PrivateRoute exact path="/">
                                        <Home/>
                                        </PrivateRoute>
                                        <PrivateRoute path="/statistics">
                                            <Statistics/>
                                        </PrivateRoute>
                                    </Switch>
                                </Suspense>
                            </>}
{/* For desktop screen */}
                    {matches.large && <>    
                                {/* <DashboardMobileNav/> */}
                                <Suspense>
                                    <Switch>

                                        <PrivateRoute exact path="/">
                                        <Home/>
                                        </PrivateRoute>

                                        <PrivateRoute path="/statistics">
                                            <Statistics/>
                                        </PrivateRoute>
                                        
                                    </Switch>
                                </Suspense>
                            </>}
                 </div>
                )}
                </Media> 
            </div>
   
</Container>
 </div>
export default DashboardRoutes;