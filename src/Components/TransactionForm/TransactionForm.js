import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import style from './TransactionForm.module.scss';
import sprite from '../../images/sprite.svg';
import 'react-datetime/css/react-datetime.css';
import SelectField from '../SelectField';
import Datetime from 'react-datetime';
import { toast } from 'react-toastify';
import 'react-datetime/css/react-datetime.css';
// import {
//   transactionSelectors,
//   transactionOperations,
// } from '../../redux/transaction';
import 'react-toastify/dist/ReactToastify.css';
// import { connect } from 'react-redux';
import Button from '../../Components/Button';

const initialState = {
  quantity: '',
  date: '',
  option: '',
  comments: '',
};

function TransactionForm({ onSubmit, options }) {
  // State
  const [state, setState] = useState(initialState);
  const { quantity, date, option, comments } = state;

  // Handler
  const handleInputOnChange = e => {
    setState({
      ...state,

      [e.target.name]: e.target.value,
    });

    console.log(e.target.name);
  };

  // const chekedIsEmptyField = (quantity, selectedFile, date) => {
  //   return quantity.trim() === '' || selectedFile.trim() === '' || date.trim();
  // };

  const onSubmitHandler = e => {
    e.preventDefault();
    alert('Form submitted');

    // const url = 'https://jsonplaceholder.typicode.com/posts';
    // const requestOptions = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ ...state }),
    // };
    // fetch(url, requestOptions)
    //   .then(response => console.log('Submitted successfully'))
    //   .catch(error => console.log('Form submit error', error));

    reset();
    return;
  };

  const reset = () => {
    setState(initialState);
  };

  return (
    <form
      id="form"
      onSubmit={onSubmitHandler}
      className={style.TransactionForm}
    >
      {/* <SelectField
        name="option"
        options={options}
        value={option}
        onChange={handleInputOnChange}
        placeholder="Выберите категорию"
      /> */}
      <div className={style.SelectForm}>
        <select
          name="option"
          value={option}
          onChange={handleInputOnChange}
          options={options}
          required
        >
          <option value="" disabled selected>
            Выберите категорию
          </option>
          {options.map((option, id) => (
            <option key={id} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className={style.TransactionBox}>
        <label className={style.TransactionLabel} htmlFor="quantity">
          <input
            id="quantity"
            name="quantity"
            type="text"
            className={style.InputTransaction}
            placeholder="0.00"
            value={quantity}
            onChange={handleInputOnChange}
            required
            pattern="^((\d+)|(\d{1,3})(\,\d{3}|)*)(\.\d{2}|)"
          />
        </label>

        <div className={style.BtnCalendar}>
          <Datetime
            // id="date"
            name="date"
            // value={date}
            onChange={handleInputOnChange}
            className={style.Datetime}
            dateFormat="DD-MM-YYYY"
            timeFormat={false}
            initialValue={new Date()}
          />

          {/* <svg width="18" height="20" className={style.svgCalendar}>
            <use xlinkHref={`${sprite}#icon-newdate`}></use>
          </svg> */}
        </div>
      </div>

      <div className={style.CommentsBox}>
        <label htmlFor="comments">
          <textarea
            id="comments"
            name="comments"
            className={style.Comments}
            placeholder="Комментарий"
            onChange={handleInputOnChange}
            value={comments}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          ></textarea>
        </label>
      </div>

      <div className={style.BtnBox}>
        <Button type="submit"> Добавить</Button>
      </div>
    </form>
  );
}

export default TransactionForm;
