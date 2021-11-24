import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import {
  getCategoryIncrement,
  getCategoryDecrement,
} from '../../redux/finance/financeSelector';
import style from './StatisticTab.module.scss';

const StatisticTab = ({ allStat }) => {
  const statistics = allStat.list;

  const increment = useSelector(getCategoryIncrement);
  const decrement = useSelector(getCategoryDecrement);

  const allCard = [...increment, ...decrement].reduce((acc, item) => {
    acc = { ...acc, [item.type]: item.value };
    return acc;
  }, {});

  return (
    <>
      {statistics && (
        <div className={style.StatisticTabContainer}>
          <ul className={style.StatisticTabHead}>
            <li className={style.StatisticTabHeadItem}>Категория</li>
            <li className={style.StatisticTabHeadItem}>Сумма</li>
          </ul>

          <ul className={style.StatisticTabList}>
            {statistics.map(item => (
              <li key={uuidv4()} className={style.StatisticTabListItem}>
                <div
                  className={style.ItemMarker}
                  style={{ backgroundColor: item.color }}
                ></div>
                <p className={style.CategoryName}>{allCard[item.type]}</p>
                <p className={style.CategorySum}>{item.summary}</p>
              </li>
            ))}
          </ul>

          <ul className={style.StatisticTabTotal}>
            <li className={style.StatisticTabTotalItem}>
              <p>Расходы:</p>
              <p className={style.Expenses}>{allStat.amounts.expense}</p>
            </li>

            <li className={style.StatisticTabTotalItem}>
              <p>Доходы:</p>
              <p className={style.Income}>{allStat.amounts.income}</p>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
export default StatisticTab;
