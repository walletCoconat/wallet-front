// import React from 'react';
import { useSelector } from 'react-redux';
import { getFilterDataTransaction } from '../../redux/finance/financeSelector';
// import { getFinanceData } from '../../redux/finance/financeSelector'
import style from './HomeTab.scss';

const MobileTab = () => {
  const transactions = useSelector(getFilterDataTransaction);

  return (
    <>
      {transactions ? (
        <ul className="verticalList">
          <li className="itemTransaction">
            {transactions.map(transaction => (
              <>
                <div
                  className="line"
                  // style={{ backgroundColor: transaction.type == '+' ? 'green' : 'red' }}
                ></div>
                <ul className="verticalList">
                  <li className="listItem">
                    <span className="category">Дата</span>

                    <span>{transactions.date}</span>
                    {/* <span className="data">04.11.19</span> */}
                  </li>
                  <li className="listItem">
                    <span className="category">Тип</span>
                    {/* <span style={{ color: transaction.type == '+' ? 'green' : 'red' }}>{transaction.type}</span> */}
                    <span>-</span>
                  </li>
                  <li className="listItem">
                    <span className="category">Категория</span>

                    <span>{transaction.type}</span>
                    {/* <span>Разное</span> */}
                  </li>
                  <li className="listItem">
                    <span className="category">Комментарий:</span>
                    <span>{transaction.category}</span>
                    {/* <span>Подарок жене</span> */}
                  </li>
                  <li className="listItem">
                    <span className="category">Сумма</span>
                    <span>{transaction.sum}</span>
                    {/* <span>300</span> */}
                  </li>
                  <li className="listItem">
                    <span className="category">Баланс</span>
                    <span>{transaction.balance}</span>
                    {/* <span>6900</span> */}
                  </li>
                </ul>
              </>
            ))}
          </li>
        </ul>
      ) : null}
    </>
  );
};

export default MobileTab;
