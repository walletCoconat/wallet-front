// import React from 'react';
import { useSelector } from 'react-redux';
import { getUpdateDataTransaction } from '../../redux/finance/financeSelector';
// import { getFinanceData } from '../../redux/finance/financeSelector'
import style from './HomeTab.scss';

const MobileTab = () => {
  const transactions = useSelector(getUpdateDataTransaction);

  return (
    <>
      {transactions ? (
        <>
          <ul className="verticalList">
            {transactions.map(transaction => (
              <li className="transactionItem" id={transaction.id}>
                <div className="border">
                  <ul className="verticalList">
                    <li className="listItem">
                      <div
                        className="line"
                        style={{
                          backgroundColor:
                            transaction.type === '+' ? 'green' : 'red',
                        }}
                      ></div>{' '}
                      <span className="category">Дата</span>
                      <span className="data">{transaction.date}</span>
                    </li>
                    <li className="listItem">
                      <span className="category">Тип</span>
                      <span className="data">{transaction.type}</span>
                    </li>
                    <li className="listItem">
                      <span className="category">Категория</span>

                      <span className="data">{transaction.category}</span>
                    </li>
                    <li className="listItem">
                      <span className="category">Комментарий:</span>
                      <span className="data">{transaction.comments}</span>
                    </li>
                    <li className="listItem">
                      <span className="category">Сумма</span>
                      <span className="data">{transaction.sum}</span>
                    </li>
                    <li className="listItem">
                      <span className="category">Баланс</span>
                      <span className="data">{transaction.balance}</span>
                    </li>
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </>
  );
};

export default MobileTab;
