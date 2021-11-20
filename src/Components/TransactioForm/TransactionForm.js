import React, { useState } from 'react';
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
  selectedFile: '',
  comments: '',
};

function TransactionForm({ options, onSubmit }) {
  const [state, setState] = useState(initialState);
  const { quantity, date, selectedFile, comments } = state;

  const handleInputOnChange = event => {
    const { name, value } = event.currentTarget;

    setState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const chekedIsEmptyField = (quantity, date, selectedFile) => {
    return (
      quantity.trim() === '' || date.trim() === '' || selectedFile.trim() === ''
    );
  };

  const onSubmitHandler = e => {
    e.preventDefault();

    if (chekedIsEmptyField(quantity, date, selectedFile)) {
      toast.info('Fill in the input fields name and number!');
    }
    onSubmit(quantity, date, selectedFile, comments);
    reset();
    return;
  };

  const reset = () => {
    setState(initialState);
  };

  return (
    <form id="form" onSubmit={onSubmitHandler}>
      <SelectField
        id="selectedFile"
        name="nameOfCategory"
        options={options}
        value={state}
        onChange={handleInputOnChange}
      />

      <div className={style.TransactionBox}>
        <label className={style.Transaction}>
          <input
            id="quantity"
            name="quantity"
            type="text"
            className={style.InputTransaction}
            placeholder="0.00"
            value={quantity}
            onChange={handleInputOnChange}
          ></input>

          <Datetime
            className={style.Datetime}
            dateFormat="DD-MM-YYYY"
            timeFormat={false}
            initialValue={new Date()}

            // onChange={handleInputOnChange}
          />
          <button className={style.BtnCalendar}>
            <svg width="18" height="20">
              <use xlinkHref={`${sprite}#icon-newdate`}></use>
            </svg>
          </button>
        </label>

        <label className={style.CommentsBox}>
          <textarea
            id="comments"
            name="comments"
            className={style.Comments}
            placeholder="Комментарий"
            onChange={handleInputOnChange}
            value={comments}
          ></textarea>
        </label>
      </div>
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
