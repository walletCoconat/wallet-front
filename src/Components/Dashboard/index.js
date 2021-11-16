import DashboardNav from "./DashboardNav";
import { Switch, Route } from 'react-router';
import './Dashboard.scss';
import { Suspense } from "react";
import Statistics from "./DashboardStatistics";
import Home from "./DashboardHome";
import ExchangeRates from './DashboardExchange';
import Media from 'react-media';

const DashboardRoutes = () =>
    <div className='Dashboard_bgc'>
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
                               <div>
                                <DashboardNav/>
                                <Suspense>
                                    <Switch>
                                        <Route exact path="/">
                                        <Home/>
                                        </Route>
                                        <Route path="/statistics">
                                            <Statistics/>
                                        </Route>
                                        <Route path="/exchange_rates" restricted>
                                            <ExchangeRates/>
                                        </Route>
                                    </Switch>
                                </Suspense>
                                </div>}
{/* For mobile tablet */}
                    {matches.medium && 
                            <div>    
                                <DashboardNav/>
                                <Suspense>
                                    <Switch>
                                        <Route exact path="/">
                                        <Home/>
                                        </Route>
                                        <Route path="/statistics">
                                            <Statistics/>
                                        </Route>
                                    </Switch>
                                </Suspense>
                            </div>}
{/* For desktop screen */}
                    {matches.large && <div>    
                                <DashboardNav/>
                                <Suspense>
                                    <Switch>
                                        <Route exact path="/">
                                        <Home/>
                                        </Route>
                                        <Route path="/statistics">
                                            <Statistics/>
                                        </Route>
                                        
                                    </Switch>
                                </Suspense>
                            </div>}
                 </div>
                )}
                </Media> 
            </div>
    </div>

export default DashboardRoutes;