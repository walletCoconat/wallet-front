// import React from 'react';
import { useSelector } from 'react-redux';
import { getFilterDataTransaction } from '../../redux/finance/financeSelector';
// import { getFinanceData } from '../../redux/finance/financeSelector'
import Media from 'react-media';
import style from './HomeTab.scss';

const HomeTab = () => {
  const transactions = useSelector(getFilterDataTransaction);

  return (
    <>
      <div className="container">
        <ul className="headList">
          <li>Дата</li>
          <li>Тип</li>
          <li>Категория</li>
          <li>Комментарий</li>
          <li>Сумма</li>
          <li>Баланс</li>
        </ul>

        <ul className="verticalList">
          <li>
            {/* map  */}
            <ul className="desktopList">
              <li className="desktopListItem">04.01.19</li>
              <li className="desktopListItem">-</li>
              <li className="desktopListItem">Разное</li>
              <li className="desktopListItem">Подарок жене</li>
              <li className="desktopListItem">300.00</li>
              <li className="desktopListItem">6 900.00</li>
            </ul>
            {/* end of map */}
          </li>
        </ul>
      </div>

      {/* <table>
      <tr>
        <th>Дата</th>
        <th>Тип</th>
        <th>Категория</th>
        {/* <th>Комментарий</th> */}
      {/* <th>Сумма</th>
        <th>Баланс</th>
      </tr>
      {transactions.map(transaction => (
        <tr>
          <td>{transaction.data}</td>
          <td>{transaction.type}</td>
          <td>{transaction.category}</td>
          {/* <td>{transaction.comment}</td> */}
      {/* <td>{transaction.sum}</td> 
          <td>{transaction.balance}</td>
        </tr>
      ))}
      </table> */}
    </>
  );
};

export default HomeTab;
