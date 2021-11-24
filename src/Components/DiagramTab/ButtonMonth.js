import React, { useDispatch, useState, useEffect } from 'react';
import './DiagramTab.scss';
// import Button from '../Button/Button';
import sprite from '../../images/sprite.svg';

const DiagramTab = ({ onChange }) => {
  const initialMonthsState = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];
  const initialYearsState = ['2021'];
  const [months, setmonths] = useState(initialMonthsState);
  const [currentMonth, setCurrentMonth] = useState({
    currentMonth: '',
  });
  const [isModal, setIsModal] = useState(false);
  const handleClickMonth = () => {
    setIsModal(!isModal);
  };

  const handleChangeMonth = e => {
    setCurrentMonth({
      currentMonth: e.target.textContent,
    });
  };

  useEffect(() => {
    onChange(currentMonth);
  }, [currentMonth, onChange]);

  return (
    <>
      <div className="diagramTab__dropdown">
        <button className="diagramTab__button" onClick={handleClickMonth}>
          Месяц
          <svg className="diagramTab__icons" width="18px" height="9px">
            <use xlinkHref={`${sprite}#icon-arrow`}></use>
          </svg>
        </button>
        {isModal && (
          <div className="diagramTab__selectContainer">
            <ul className="diagramTab__ul">
              {months.map((option, id) => (
                <li
                  key={id}
                  className="diagramTab__li"
                  onClick={handleChangeMonth}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default DiagramTab;
