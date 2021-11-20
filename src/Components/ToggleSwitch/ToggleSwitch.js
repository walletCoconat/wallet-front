import React from 'react';
import style from './ToggleSwitch.module.scss';

const ToggleSwitch = ({ checked, onChange }) => {
  return (
    <div className={style.ToggleswitchBox}>
      <span style={{ color: checked && '#ff6596' }}>Доход</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={e => onChange(e.target.checked)}
        className={style.SwitchCheckbox}
        id={`switch`}
      />
      <label className={style.SwitchLabel} htmlFor={`switch`}>
        <span className={style.SwitchButton} />
      </label>
      <span style={{ color: checked && '#ff6596' }}> Расход </span>
    </div>
  );
};

export default ToggleSwitch;
