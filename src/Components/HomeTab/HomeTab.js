// import React from 'react';
import { useSelector } from 'react-redux';
import { getFilterDataTransaction } from '../../redux/finance/financeSelector'
// import { getFinanceData } from '../../redux/finance/financeSelector'
// import style from './HomeTab.module.scss'

const HomeTab = () => {
  const transactions = useSelector(getFilterDataTransaction)

  return (
      <table>
        <tr>
              <th>Дата</th>
              <th>Тип</th>
              <th>Категория</th>
              {/* <th>Комментарий</th> */}
              <th>Сумма</th>
              <th>Баланс</th>
          </tr>
          {transactions.map(transaction => (
              <tr>
                  <td>{transaction.data}</td>
                  <td>{transaction.type}</td>
                  <td>{transaction.category}</td>
                  {/* <td>{transaction.comment}</td> */}
                  <td>{transaction.sum}</td>
                  <td>{transaction.balance}</td>
              </tr>
          ))}
    </table>
  )
};

export default HomeTab;