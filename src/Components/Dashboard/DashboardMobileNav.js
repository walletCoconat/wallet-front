import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import homeIcon from '../../images/dashboard_sprite/main.svg';
import statisticsIcon from '../../images/dashboard_sprite/statistics.svg';
import exchangeRatesIcon from '../../images/dashboard_sprite/exchange_rates.svg';
import Media from 'react-media';
import active_home from '../../images/dashboard_sprite/main_active.svg';
import active_statisticsIcon from '../../images/dashboard_sprite/statistics_active.svg';
import active_exchangeRatesIcon from '../../images/dashboard_sprite/exchange_rates_active.svg';


const DashboardMobileNav = () => <>
    <div >
    <Media queries={{
        small: "(max-width: 767px)",
        }}>

        {matches => 
            (<div>
{/* For mobile screen */}
                {matches.small && <div className='Dashboard_icon'>
                    <NavLink
                        exact
                        to="/"
                        className="Dashboard_ic"
                        activeClassName="Dashboard_icon_active"
                    >
                        <img className='Dashboard_icon_fill' src={homeIcon} alt="Home page icon" width={38} />
                        <img className='Dashboard_icon_fill_active' src={active_home} alt="Home page icon" width={38} />
                    </NavLink>

                    <NavLink
                        to="/statistics"
                        className="Dashboard_ic"
                        activeClassName="Dashboard_icon_active"
                    >
                        <img className='Dashboard_icon_fill' src={statisticsIcon} alt="Statistics page icon" width={38} />
                        <img className='Dashboard_icon_fill_active' src={active_statisticsIcon} alt="Statistics page icon" width={38} />

                    </NavLink>  

                    <NavLink
                        exact
                        to="/exchange_rates"
                        className="Dashboard_ic"
                        activeClassName="Dashboard_icon_active"
                    >
                        <img className='Dashboard_icon_fill' src={exchangeRatesIcon} alt="Exchange rates page icon" width={38} />
                        <img className='Dashboard_icon_fill_active' src={active_exchangeRatesIcon} alt="Exchange rates page icon" width={38} />

                    </NavLink>
                </div>}

            </div>
        )}
    </Media> 

</div>
</>

export default DashboardMobileNav;