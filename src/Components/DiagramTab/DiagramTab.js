import React, { useDispatch, useState } from 'react';
import './DiagramTab.scss';
import ButtonMonth from './ButtonMonth'
import ButtonYear from './ButtonYear'

const DiagramTab = () => {

  return (
    <>
      <div className="diagramTab__container">
        <ButtonMonth />
        <ButtonYear/>
      </div>
    </>
  );
};

export default DiagramTab;
