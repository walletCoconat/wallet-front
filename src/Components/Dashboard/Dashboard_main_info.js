import TotalBalance from '../TotalBalance/index'
import ExchangeRates from './DashboardExchange';
import './Dashboard.scss';
import { NavLink } from 'react-router-dom';
import homeIcon from '../../images/dashboard_sprite/main.svg';
import statisticsIcon from '../../images/dashboard_sprite/statistics.svg';
import active_home from '../../images/dashboard_sprite/main_active.svg';
import active_statisticsIcon from '../../images/dashboard_sprite/statistics_active.svg';


const MainInfo = () =>
    
        <div className='Dashboard_main_container'>
            <div className='Dashboard_tablet_balance'>
                <NavLink
                    exact
                    to="/"
                    className="Dashboard_ic"
                    activeClassName="Dashboard_icon_active"
                >
                    <div className='Dashboard_tablet_nav'>
                    <img className='Dashboard_icon_fill' src={homeIcon} alt="Home page icon" width={18} />
                    <img className='Dashboard_icon_fill_active' src={active_home} alt="Home page icon" width={18} />  
                    <p className="Dashboard_label">Главная</p>
                    </div>
                </NavLink>

                <NavLink
                    to="/statistics"
                    className="Dashboard_ic"
                    activeClassName="Dashboard_icon_active"
                >
                    <div className='Dashboard_tablet_nav'>
                        <img className='Dashboard_icon_fill' src={statisticsIcon} alt="Statistics page icon" width={18} />
                        <img className='Dashboard_icon_fill_active' src={active_statisticsIcon} alt="Statistics page icon" width={18} />
                        
                        <p className="Dashboard_label">Статистика</p>
                    </div>  
                </NavLink>   
                
                <div className='Dashboard_balance'> <TotalBalance/> </div>
            </div>      
             <div className='ExchangeRates'><ExchangeRates/> </div>
        </div>
 
                 

export default MainInfo;