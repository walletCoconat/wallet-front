import React, { useDispatch, useState } from 'react';
import './DiagramTab.scss';
import sprite from '../../images/sprite.svg';

const DiagramTab = () => {
  const [years, setYears] = useState(['2021']);
  const [currentMonth, setCurrentMonth] = useState({
    currentMonth: '',
  });
  const [isModal, setIsModal] = useState(false);
  const handleClickYear = () => {
    setIsModal(!isModal);
  };

  const handleChangeYear = e => {
    setCurrentMonth({
      currentMonth: e.target.textContent,
    });
  };

  return (
    <>
     
        <div className="diagramTab__dropdown">
          <button className="diagramTab__button" onClick={handleClickYear}>
            Год
            <svg className="diagramTab__icons" width="18px" height="9px">
              <use xlinkHref={`${sprite}#icon-arrow`}></use>
            </svg>
          </button>
          {isModal && (
            <div className="diagramTab__selectContainer">
              <ul className="diagramTab__ul">
                {years.map((option, id) => (
                  <li
                    key={id}
                    className="diagramTab__li"
                    onClick={handleChangeYear}
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
