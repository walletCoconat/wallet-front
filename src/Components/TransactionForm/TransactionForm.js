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
          placeholder="Выберите категорию"
          name="option"
          value={option}
          onChange={handleInputOnChange}
          options={options}
          className={style.Select}
        >
          {options.map((option, id) => (
            <option key={id} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className={style.TransactionBox}>
          <input
            // id="quantity"
            name="quantity"
            type="number"
            className={style.InputTransaction}
            placeholder="0.00"
            value={quantity}
            onChange={handleInputOnChange}
            required
            pattern="^((\d+)|(\d{1,3})(\,\d{3}|)*)(\.\d{2}|)"
          ></input>

          <button className={style.BtnCalendar}>
            {/* <Datetime
              // id="date"
              name="date"
              // value={date}

              onChange={handleInputOnChange}
              className={style.Datetime}
              dateFormat="DD-MM-YYYY"
              timeFormat={false}
              initialValue={new Date()}
            /> */}
            <svg width="18" height="20">
              <use xlinkHref={`${sprite}#icon-newdate`}></use>
            </svg>
          </button>
        </label>

        <label className={style.CommentsBox}>
          <textarea
            name="comments"
            className={style.Comments}
            placeholder="Комментарий"
            onChange={handleInputOnChange}
            value={comments}
            required
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          ></textarea>
        </label>
      </div>
      <button type="submit" className={style.Button}>
        Добавить
      </button>
    </form>
  );
}

export default TransactionForm;

// const mapStateToProps = state => ({
//   contacts: transactionSelectors.getTransaction(state),
// });

// const mapDispatchToProps = dispatch => ({
//   onSubmit: (quantity, date, selectedFile, comments) =>
//     dispatch(
//       transactionOperations.addTransaction(
//         quantity,
//         date,
//         selectedFile,
//         comments,
//       ),
//     ),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);
