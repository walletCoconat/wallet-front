import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  getStatistic,
  getTotalBalance,
} from '../../redux/finance/financeSelector';
import { Doughnut } from 'react-chartjs-2';
import s from './Chart.module.scss';

const Chart = () => {
  const statistics = useSelector(getStatistic);
  console.log(statistics);

  //* При каждом обновлении перезаписываем данные для Чарта
  useEffect(() => {
    if (statistics) {
      let OtherExp = statistics[0].summary;
      let Auto = statistics[1].summary;
      let Products = statistics[2].summary;
      let MainExp = statistics[3].summary;
      let PersonalExp = statistics[4].summary;
      let ChildExp = statistics[5].summary;
      let HouseExp = statistics[6].summary;
      let Education = statistics[7].summary;
      let Leisure = statistics[8].summary;
    }
  });

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
        <div className="s.Container">
          <Doughnut
            height={320}
            width={320}
            data={{
              // labels: ['A', 'B', 'C', '1', '2', '3', '4', '8', '7'],
              datasets: [
                {
                  // data: [
                  //   OtherExp,
                  //   Auto,
                  //   Products,
                  //   MainExp,
                  //   PersonalExp,
                  //   ChildExp,
                  //   HouseExp,
                  //   Education,
                  //   Leisure,
                  // ],
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
        </div>
      )}
    </>
  );
};

export default Chart;
