import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllStatistic } from '../../redux/finance/financeOperations';
import Media from 'react-media';
import MainInfo from './Dashboard_main_info';
import Chart from '../Chart/Chart';
import MobileChart from '../Chart/MobileChart';
import DiagramTab from '../DiagramTab/DiagramTab';
import StatisticTab from '../StatisticTab/';

const Statistics = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchAllStatistic()), []);

  return (
    <>
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
                <div className="Dashboard_stats_container">
                  <h1 className="Dashboard_stats_title">Статистика</h1>
                  <div className="Dashboard_stats">
                    <div className="Dashboard_stats_diagram">
                      <MobileChart />
                    </div>
                    <div className="Dashboard_stats_table">
                      <DiagramTab />
                      <StatisticTab />
                    </div>
                  </div>
                </div>
              )}

              {/* For tablet screen*/}
              {matches.medium && (
                <div className="home_container">
                  <MainInfo />
                  <div className="Dashboard_stats_container">
                    <h1 className="Dashboard_stats_title">Статистика</h1>
                    <div className="Dashboard_stats">
                      <div className="Dashboard_stats_diagram">
                        <Chart />
                      </div>
                      <div className="Dashboard_stats_table">
                        <DiagramTab />
                        <StatisticTab />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </Media>
      </div>
    </>
  );
};

export default Statistics;
