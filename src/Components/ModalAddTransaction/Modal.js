import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import style from './Modal.module.scss';
import sprite from '../../images/sprite.svg';
import 'react-datetime/css/react-datetime.css';
import TransactionForm from '../TransactioForm';

const optionsOfSpend = [
  { value: 'Основной', label: 'Основной' },
  { value: 'Еда', label: 'Еда' },
  { value: 'Авто', label: 'Авто' },
  { value: 'Развитие', label: 'Развитие' },
  { value: 'Дети', label: 'Дети' },
  { value: 'Дом', label: 'Дом' },
  { value: 'Образование', label: 'Образование' },
  { value: 'Остальные', label: 'Остальные' },
];

const optionOfIncome = [
  { value: 'Нерегулируемый доход', label: 'Нерегулируемый доход' },
  { value: 'Регулируемый доход', label: 'Регулируемый доход' },
];

const Modal = ({ isShowing, hide }) => {
  // Switch Slider
  const [isToggled, setIsToggled] = useState(false);

  const toggler = () => {
    isToggled ? setIsToggled(false) : setIsToggled(true);
  };

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
    ? ReactDOM.createPortal(
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

              <div className={style.SwitchBox}>
                <div className={style.SwitchSliderBox}>
                  <span
                    className={toggler ? style.TextActive : style.TextNotActive}
                  >
                    Доход
                  </span>

                  <label
                    checked={isToggled}
                    onChange={toggler}
                    name="switch"
                    className={style.Switch}
                  >
                    <input type="checkbox" />
                    <span className={style.Slider}></span>
                  </label>

                  <span
                    className={toggler ? style.TextActive : style.TextNotActive}
                  >
                    Расход
                  </span>
                </div>

                {toggler ? (
                  <TransactionForm options={optionOfIncome} />
                ) : (
                  <TransactionForm options={optionsOfSpend} />
                )}
              </div>

              <div className={style.BtnBox}>
                <button type="submit" className={style.Button}>
                  Добавить
                </button>
                <button type="submit" className={style.Button}>
                  Отмена
                </button>
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body,
      )
    : null;
};

export default Modal;
