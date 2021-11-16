import DashboardNav from "./DashboardNav";
import { Switch, Route } from 'react-router';
// import s from './DashboardRoutes.module.css';
import { Suspense } from "react";
import Statistics from "./DashboardStatistics";
import Home from "./DashboardHome";
import ExchangeRates from './DashboardExchange';
import Media from 'react-media';

const DashboardRoutes = () =>
    <div className=''>
        <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <>
              {matches.small && 
                    <div>    
                        <DashboardNav/>
                        <Suspense>
                            <Switch>
                                <Route exact path="/home">
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
                                <Route path="/exchange_rates">
                                    <ExchangeRates/>
                                </Route>
                            </Switch>
                        </Suspense>
                    </div>}
              {matches.large && <p>I am large!</p>}
            </>
          )}
        </Media>   
    </div>

export default DashboardRoutes;