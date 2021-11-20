import React from 'react';
import style from './SelectField.module.scss';
import Select from 'react-select';

// import sprite from '../../images/sprite.svg';

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? '#FF6596' : '#000000',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
    paddingLeft: '20px',
    minHeight: 44,
  }),
  control: () => ({
    width: ' 100%',
    minHeight: 35,
    border: 'none',
    borderBottom: '1px solid #e0e0e0',
    fontSize: 18,
    lineHeight: 1.5,
    color: ' #bdbdbd',
    cursor: 'pointer',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';
    const color = '#000000';

    return { ...provided, opacity, transition, color };
  },
};

const SelectField = ({ options }) => {
  // const [value, setValue] = useState('');

  return (
    <div className={style.SpendBox}>
      <Select
        // value={value}
        // onChange={e => setValue(e.target.value)}
        placeholder={'Выберите категорию'}
        styles={customStyles}
        options={options}
        clearable={false}
        avtoFocus
        isSearchable
      >
        {/* <svg>
          <use xlinkHref={`${sprite}#icon-select`}></use>
        </svg> */}
        {options.map((option, id) => (
          <option key={id} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default SelectField;
