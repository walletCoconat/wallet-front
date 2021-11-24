import { useSelector } from 'react-redux';

import {
  // getFilterDataTransaction,
  getUpdateDataTransaction, getCategoryIncrement, getCategoryDecrement,
  // getFinanceData
} from '../../redux/finance/financeSelector'
import style from './HomeTab.scss'


const HomeTab = () => {
  // const transactions = useSelector(getFilterDataTransaction);
  // const transactions = useSelector(getFinanceData);
  const transactions = useSelector(getUpdateDataTransaction);
  const increment = useSelector(getCategoryIncrement);
  const decrement = useSelector(getCategoryDecrement);

  const allCard = [...increment, ...decrement].reduce((acc, item) => {
    acc = { ...acc, [item.type]:item.value }
    return acc
  }, {})

// console.log('ALLCARDWWWWWWWWWWWWWWWWWWWWWWWWWW', allCard)
  return (
  <>
    { transactions ? 
      <table className="TableContainer">
        {/* <col className="col"></col>
          <col className="coln"></col>
          <col className="col3"></col>
          <col className="coln"></col>
          <col className="coln"></col>
          <col className="coln"></col> */}
        <thead className="TableHead">
        <tr>
              <th key="tdate" className="TableTh">Дата</th>
              <th key="ttype" className="TableTh">Тип</th>
              <th key="tcategory"className="TableTh">Категория</th>
              <th key="tcomment" className="TableTh">Комментарий</th>
              <th key="tsum" className="TableTh">Сумма</th>
              <th key="tbalance" className="TableTh">Баланс</th>
          </tr>
        </thead>
       
        <tbody className='tbodyScroll' >
          {transactions.map(transaction => (
              <tr key={transaction.id} className="TableRow">
                  <td className="TableTd">{transaction.date}</td>
                  <td className="TableTd">{transaction.type}</td>
                  <td className="TableTd">{allCard[transaction.category]}</td>
                  <td className="TableTd">{transaction.comments}</td>
                  <td className="TableTd">{transaction.sum}</td>
                  <td className="TableTd">{transaction.balance}</td>
              </tr>
              
          ))}
        </tbody>
  
        </table>
        :
        null
  }
  </>
  )
};

export default HomeTab;

// ------------------------------------------------------
// import { useSelector } from 'react-redux';
// import { getFilterDataTransaction } from '../../redux/finance/financeSelector';
// import Media from 'react-media';
// import style from './HomeTab.scss';


// const HomeTab = () => {
//   const transactions = useSelector(getFilterDataTransaction)
//   // console.log('getFilterDataTransaction', transactions)
//   return (
//     <>
//     { transactions ?
//       <div className="container">
//         <ul className="headList">
//           <li>Дата</li>
//           <li>Тип</li>
//           <li>Категория</li>
//           <li>Комментарий</li>
//           <li>Сумма</li>
//           <li>Баланс</li>
//         </ul>

//         <ul className="verticalList">
//           <li>
//               {/* map  */}
//               {transactions.map(transaction => (
//                 <ul key={transaction.id} className="desktopList">
//                   <li className="desktopListItem">{transaction.date}</li>
//                   <li className="desktopListItem">{transaction.type}</li>
//                   <li className="desktopListItem">{transaction.category}</li>
//                   <li className="desktopListItem">{transaction.category}</li>
//                   <li className="desktopListItem">{transaction.sum}</li>
//                   <li className="desktopListItem">{transaction.balance}</li>
//                 </ul>
//               ))}
//             {/* end of map */ }
//           </li>
//         </ul>
//         </div>
//         :
//         null
//       }
//     </>
//   );
// };

// export default HomeTab;

