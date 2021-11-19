import TotalBalance from '../TotalBalance/index'
import HomeTab from '../HomeTab/index'
import ExchangeRates from './DashboardExchange';
import './Dashboard.scss';
import Media from 'react-media';
import { NavLink } from 'react-router-dom';
import homeIcon from '../../images/dashboard_sprite/home_dashboard.svg';
import statisticsIcon from '../../images/dashboard_sprite/statistics.svg';


const Home = () => 
    <div>
        <Media queries= {{
            small: "(max-width: 767px)",
            medium: "(min-width: 768px) and (max-width: 1199px)",
            large: "(min-width: 1200px)"
        }}>

            {matches => (
                <div>

                    {/* For mobile screen */}
                    {matches.small && 
                        <>
                            <div className='Dashboard_balance'><TotalBalance/></div>
                            <p className='Dashboard_table'>TAble</p>
                        </>}

                    {/* For tablet screen*/}
                    {matches.medium && 
                        <> 
                            <div className='Dashboard_tablet_container'>
                                <div className='Dashboard_tablet_balance'>
                                    <NavLink
                                        exact
                                        to="/"
                                        className="Dashboard_ic"
                                        activeClassName="Dashboard_icon_active"
                                    >
                                        <div className='Dashboard_tablet_nav'>
                                        <img className='Dashboard_icon_fill' src={homeIcon} alt="" width={18} />
                                        <p className="Dashboard_label">Главная</p>
                                        </div>
                                    </NavLink>

                                    <NavLink
                                        to="/statistics"
                                        className="Dashboard_ic"
                                        activeClassName="Dashboard_icon_active"
                                    >
                                        <div className='Dashboard_tablet_nav'>
                                            <img className='Dashboard_icon_fill' src={statisticsIcon} alt="" width={18} />
                                            <p className="Dashboard_label">Статистика</p>
                                        </div>  
                                    </NavLink>   
                                    <div className='Dashboard_balance'>
                                        <TotalBalance/>
                                    </div>
                                </div>
                                
                                <ExchangeRates/>
                            </div>
                            <p className='Dashboard_table'>TAble</p>
                        </>
                    }

                
                    {/* For desktop screen*/}
                    {matches.large && 
                        <div class='Dashboard_desktop_main'>
                            <div className='Dashboard_desktop_container'>
                                <NavLink
                                    exact
                                    to="/"
                                    className="Dashboard_ic"
                                    activeClassName="Dashboard_icon_active"
                                >
                                    <div className='Dashboard_tablet_nav'>
                                    <img className='Dashboard_icon_fill' src={homeIcon} alt="" width={18} />
                                    <p className="Dashboard_label">Главная</p>
                                    </div>
                                </NavLink>

                                <NavLink
                                    to="/statistics"
                                    className="Dashboard_ic"
                                    activeClassName="Dashboard_icon_active"
                                >
                                    <div className='Dashboard_tablet_nav'>
                                    <img className='Dashboard_icon_fill' src={statisticsIcon} alt="" width={18} />
                                    <p className="Dashboard_label">Статистика</p>
                                    </div>  
                                </NavLink>   
                                <div className='Dashboard_balance'><TotalBalance/></div>
                                <ExchangeRates/>
                            </div>
                            <p className='Dashboard_table'><HomeTab/></p>
                        </div>
                    }

                </div>
            )}
        </Media> 
    </div>
   

export default Home;

