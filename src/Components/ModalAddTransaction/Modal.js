// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import style from './Modal.module.scss';
// import sprite from '../../images/sprite.svg';
// import 'react-datetime/css/react-datetime.css';
// import TransactionForm from '../TransactionForm';
// import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

// const optionsOfSpend = [
//   { value: 'Основной', label: 'Основной' },
//   { value: 'Еда', label: 'Еда' },
//   { value: 'Авто', label: 'Авто' },
//   { value: 'Развитие', label: 'Развитие' },
//   { value: 'Дети', label: 'Дети' },
//   { value: 'Дом', label: 'Дом' },
//   { value: 'Образование', label: 'Образование' },
//   { value: 'Остальные', label: 'Остальные' },
// ];

// const optionOfIncome = [
//   { value: 'Нерегулируемый доход', label: 'Нерегулируемый доход' },
//   { value: 'Регулируемый доход', label: 'Регулируемый доход' },
// ];

// const Modal = ({ isShowing, hide }) => {
//   // Switch Slider
//   const [checked, setChecked] = useState(false);

//   // Close-Open Modal
//   useEffect(() => {
//     window.addEventListener('keydown', handleKeyDown);

//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   });

//   const handleKeyDown = e => {
//     if (e.key === 'Escape') {
//       hide();
//     }
//   };

//   return isShowing
//     ? ReactDOM.createPortal(
//         <React.Fragment>
//           <div
//             className={isShowing ? style.ModalActive : style.Modal}
//             onClick={() => {
//               hide(false);
//             }}
//           >
//             <div
//               className={style.ModalContent}
//               onClick={e => e.stopPropagation()}
//             >
//               <button className={style.BtnClose} onClick={hide}>
//                 <svg width="16" height="16">
//                   <use xlinkHref={`${sprite}#icon-close`}></use>
//                 </svg>
//               </button>

//               <h2>Add Transaction</h2>

//               <div className={style.FormBox}>
//                 <ToggleSwitch
//                   checked={checked}
//                   onChange={() => setChecked(!checked)}
//                 />

//                 {checked ? (
//                   <TransactionForm options={optionsOfSpend} />
//                 ) : (
//                   <TransactionForm options={optionOfIncome} />
//                 )}
//               </div>

//               <div className={style.BtnBox}>
//                 <button type="submit" className={style.Button} onClick={hide}>
//                   Отмена
//                 </button>
//               </div>
//             </div>
//           </div>
//         </React.Fragment>,
//         document.body,
//       )
//     : null;
// };

// export default Modal;

// -------------------------------------
import React, { useState, useEffect } from 'react';
import style from './Modal.module.scss';
import sprite from '../../images/sprite.svg';
import 'react-datetime/css/react-datetime.css';
import TransactionForm from '../TransactionForm';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

import Button from '../../Components/Button';

import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

// const optionsOfSpend = [
//   { value: 'Основной', label: 'Основной' },
//   { value: 'Еда', label: 'Еда' },
//   { value: 'Авто', label: 'Авто' },
//   { value: 'Развитие', label: 'Развитие' },
//   { value: 'Дети', label: 'Дети' },
//   { value: 'Дом', label: 'Дом' },
//   { value: 'Образование', label: 'Образование' },
//   { value: 'Остальные', label: 'Остальные' },
// ];

const optionsOfSpend = [
  { value: 'Основные расходы', label: 'Основные расходы' },
  { value: 'Продукты', label: 'Продукты' },
  { value: 'Машина', label: 'Машина' },
  { value: 'Досуг', label: 'Досуг' },
  { value: 'Забота о детях', label: 'Забота о детях' },
  { value: 'Товары для дома', label: 'Товары для дома' },
  { value: 'Образование', label: 'Образование' },
  { value: 'Другие расходы', label: 'Другие расходы' },
];

// const optionOfIncome = [
//   { value: 'Нерегулируемый доход', label: 'Нерегулярный доход' },
//   { value: 'Регулируемый доход', label: 'Регулируемый доход' },
// ];

// const optionOfIncome = [
//   { value: 'Нерегулируемый доход', label: 'Нерегулируемый доход' },
//   { value: 'Регулярный доход', label: 'Регулируемый доход' },
// ];

const optionOfIncome = [
  { value: 'Нерегулярный доход', label: 'Нерегулярный доход' },
  { value: 'Регулярный доход', label: 'Регулярный доход' },
];

const Modal = ({ isShowing, hide }) => {
  // Switch Slider
  const [checked, setChecked] = useState(false);

  // Close-Open Modal
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.key === 'Escape') {
      hide();
    }
  };

  return isShowing
    ? createPortal(
        <React.Fragment>
          <div
            className={isShowing ? style.ModalActive : style.Modal}
            onClick={() => {
              hide(false);
            }}
          >
            <div
              className={style.ModalContent}
              onClick={e => e.stopPropagation()}
            >
              <button className={style.BtnClose} onClick={hide}>
                <svg width="16" height="16">
                  <use xlinkHref={`${sprite}#icon-close`}></use>
                </svg>
              </button>

              <h2>Add Transaction</h2>

              <div className={style.FormBox}>
                <ToggleSwitch
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />

                {checked ? (
                  <TransactionForm options={optionsOfSpend} />
                ) : (
                  <TransactionForm options={optionOfIncome} />
                )}
              </div>
              <div className={style.BtnBox}>
                <Button type="submit" onClick={hide}>
                  Отмена
                </Button>
              </div>
            </div>
          </div>
        </React.Fragment>,
        modalRoot,
      )
    : null;
};

export default Modal;
