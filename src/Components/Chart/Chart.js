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

const Chart = () => {
  const statistics = useSelector(getStatistic);
  const balance = useSelector(getTotalBalance);

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
                  data: [
                    statistics[0].summary,
                    statistics[1].summary,
                    statistics[2].summary,
                    statistics[3].summary,
                    statistics[4].summary,
                    statistics[5].summary,
                    statistics[6].summary,
                    statistics[7].summary,
                    statistics[8].summary,
                  ],
                  backgroundColor: [
                    '#00AD84',
                    '#FD9498',
                    '#FFD8D0',
                    '#FED057',
                    '#C5BAFF',
                    '#4A56E2',
                    '#6E78E8',
                    '#81E1FF',
                    '#24CCA7',
                  ],
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
