
import TotalBalance from '../TotalBalance/index';
import HomeTab from '../HomeTab/index';

import './Dashboard.scss';
import Media from 'react-media';
import MainInfo from './Dashboard_main_info';
import MobileTab from '../HomeTab/MobileTab';


const Home = () => (
  <div>
    <Media
      queries={{
        small: '(max-width: 767px)',
        medium: '(min-width: 768px)',
      }}
    >
      {matches => (
        <div>
          {/* For mobile screen */}
          {matches.small && (
            <>
              <div className="Dashboard_balance">
                {' '}
                <TotalBalance />{' '}
              </div>
              <div className="Dashboard_table">
                {' '}
                <MobileTab />{' '}
              </div>
            </>
          )}

          {/* For tablet screen*/}
          {matches.medium && (
            <div className="home_container">
              <MainInfo />
              <div className="Dashboard_table">
                {' '}
                <HomeTab />{' '}
              </div>
            </div>
          )}
        </div>
      )}
    </Media>
  </div>
);


export default Home;
