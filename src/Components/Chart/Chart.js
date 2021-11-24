import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  getStatistic,
  getTotalBalance,
} from '../../redux/finance/financeSelector';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import s from './Chart.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ allStat }) => {
  // const statistics = useSelector(getStatistic);
  // console.log('DDDDDDDDDDDDDDDDDDDDDD', statistics)
  const balance = useSelector(getTotalBalance);
  // console.log('BALANCE-DDDDDDDDDDDDDDDDDDD', balance)
  const statistics = allStat.list;

  //* Colors
  const OtherExpColor = '#00AD84';
  const AutoColor = '#FD9498';
  const ProductsColor = '#FFD8D0';
  const MainExpColor = '#FED057';
  const PersonalExpColor = '#C5BAFF';
  const ChildExpColor = '#6E78E8';
  const HouseExpColor = '#4A56E2';
  const EducationColor = '#81E1FF';
  const LeisureColor = '#24CCA7';

  return (
    <>
      {statistics && (
        <div className="Container">
          <Doughnut
            height={320}
            width={320}
            data={{
              datasets: [
                {
                  data: statistics.map(item => item.summary),

                  backgroundColor: statistics.map(item => item.color),
                  borderWidth: 0,
                },
              ],
            }}
          />
          <p className="Balance">₴ {balance}</p>
        </div>
      )}
    </>
  );
};

export default Chart;
