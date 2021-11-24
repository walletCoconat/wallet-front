import { useDispatch } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { fetchAllStatistic } from '../../redux/finance/financeOperations';
import Media from 'react-media';
import MainInfo from './Dashboard_main_info';
import Chart from '../Chart/Chart';
import MobileChart from '../Chart/MobileChart';
import DiagramTab from '../DiagramTab/DiagramTab';
import StatisticTab from '../StatisticTab/';
import { walletApi } from '../../services';

async function getStat(year, month) {
  try {
    const { data } = await walletApi.getMyStat(year, month);
    return data.response;
  } catch (error) {
    console.error(error);
  }
}

const Statistics = () => {
  const [allStat, setAllStat] = useState({});
  const [year, setYear] = useState(null);
  const [month, setMonth] = useState(null);

  useEffect(() => {
    (async () => {
      const resp = await getStat(year, month);

      console.log(resp);
      setAllStat(resp);
    })();
  }, [year, month]);
  console.log(22222220003948472789, allStat);

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
                      <MobileChart allStat={allStat} />
                    </div>
                    <div className="Dashboard_stats_table">
                      <DiagramTab setMonth={setMonth} setYear={setYear} />
                      <StatisticTab allStat={allStat} />
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
                        <Chart allStat={allStat} />
                      </div>
                      <div className="Dashboard_stats_table">
                        <DiagramTab setMonth={setMonth} setYear={setYear} />
                        <StatisticTab allStat={allStat} />
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
