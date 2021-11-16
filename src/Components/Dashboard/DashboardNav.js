import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import style from './Dashboard.scss';
import homeIcon from '../../images/dashboard_sprite/home_dashboard.svg';
import statisticsIcon from '../../images/dashboard_sprite/statistics.svg';
import exchangeRatesIcon from '../../images/dashboard_sprite/exchange_rates.svg';

// import Media from 'react-media';
// import tablet from '../../images/dashboard_background/dashboard_bgc_tablet.jpg'

// import { useDispatch } from 'react-redux';
// import * as authOperation from '../../redux/auth/authOperation'

const DashboardNav = () => <>
    <div>
        <NavLink
            exact
            to="/"
            // className={s.navLink}
            // activeClassName={s.activeLink}
        >
            <div>
              <img className='' src={homeIcon} alt="" width={38} />
              <p className=''>Главная</p>
            </div>
        </NavLink>

        <NavLink
            to="/statistics"
            // className={s.navLink}
            // activeClassName={s.activeLink}
        >
            <div>
              <img className='' src={statisticsIcon} alt="" width={38} />
              <p className=''>Статистика</p>
            </div>
            
        </NavLink>  

        <NavLink
            exact
            to="/exchange_rates"
            // className={s.authLink}
            // activeClassName={s.activeLink}
        >
            <img className='' src={exchangeRatesIcon} alt="" width={38} />
        </NavLink>
                       
    </div>

    </>

export default DashboardNav;