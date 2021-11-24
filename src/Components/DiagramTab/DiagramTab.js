import React, { useDispatch, useState } from 'react';
import './DiagramTab.scss';
import ButtonMonth from './ButtonMonth';
import ButtonYear from './ButtonYear';

const DiagramTab = ({ setMonth, setYear }) => {
  return (
    <>
      <div className="diagramTab__container">
        <ButtonMonth onChange={setMonth} />
        <ButtonYear onChange={setYear} />
      </div>
    </>
  );
};

export default DiagramTab;
