import React from 'react';
import style from './ToggleSwitch.module.scss';
import PropTypes from 'prop-types';

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

ToggleSwitch.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  optionLabels: PropTypes.array,
  small: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default ToggleSwitch;
