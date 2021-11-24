import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getStatistic } from '../../redux/finance/financeSelector';
import style from './StatisticTab.module.scss';

const StatisticTab = () => {
  const statistics = useSelector(getStatistic);

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
      <div className={style.StatisticTabContainer}>
        <ul className={style.StatisticTabHead}>
          <li className={style.StatisticTabHeadItem}>Категория</li>
          <li className={style.StatisticTabHeadItem}>Сумма</li>
        </ul>

        <ul className={style.StatisticTabList}>
          <li className={style.StatisticTabListItem}>
            {/* <div className={style.ItemContainer}> */}
            <div className={style.ItemMarker}></div>

            <p className={style.CategoryName}>Категория</p>
            {/* </div> */}

            <p className={style.CategorySum}>255456.55</p>
          </li>
        </ul>

        <ul className={style.StatisticTabTotal}>
          <li className={style.StatisticTabTotalItem}>
            <p>Расходы:</p>
            <p className={style.Expenses}>25000.55</p>
          </li>

          <li className={style.StatisticTabTotalItem}>
            <p>Доходы:</p>
            <p className={style.Income}>5000.66</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default StatisticTab;
