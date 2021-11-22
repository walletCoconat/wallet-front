import React from 'react';
import { useSelector } from 'react-redux';
import { getStatistic } from '../../redux/finance/financeSelector';
import { Doughnut } from 'react-chartjs-2';
import s from './Chart.module.scss';

const Chart = () => {
  const statistics = useSelector(getStatistic);
  console.log(statistics);
  //   return <>{statistics && <h1>Statistics:</h1>}</>;
  let OtherExp = statistics[0].summary;
  let Auto = statistics[1].summary;
  let Products = statistics[2].summary;
  let MainExp = statistics[3].summary;
  let PersonalExp = statistics[4].summary;
  let ChildExp = statistics[5].summary;
  let HouseExp = statistics[6].summary;
  let Education = statistics[7].summary;
  let Leisure = statistics[8].summary;

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
    <div className="s.Container">
      <Doughnut
        height={320}
        width={320}
        data={{
          //   labels: ['1', '2', '3'],
          datasets: [
            {
              data: [
                OtherExp,
                Auto,
                Products,
                MainExp,
                PersonalExp,
                ChildExp,
                HouseExp,
                Education,
                Leisure,
              ],
              backgroundColor: [
                '#00AD84',
                '#FD9498',
                '#FFD8D0',
                '#FED057',
                '#C5BAFF',
                '#6E78E8',
                '#81E1FF',
                '#24CCA7',
              ],
            },
          ],
        }}
      />
    </div>
  );
};

export default Chart;
