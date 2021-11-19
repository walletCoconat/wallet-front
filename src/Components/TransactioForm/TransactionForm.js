import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import Axios from 'axios';
import style from './TransactionForm.module.scss';
import sprite from '../../images/sprite.svg';
import 'react-datetime/css/react-datetime.css';
import SelectField from '../SelectField';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

export default function TransactionForm({ options }) {
  const url = '';
  // const baseUrl = 'http://localhost:3001/api/notes';
  const [data, setData] = useState({
    nameOfCategory: '',
    quantity: '',
    date: '',
    comments: '',
  });

  const submit = e => {
    e.preventDefault();

    Axios.post(url, {
      nameOfCategory: data.nameOfCategory,
      quantity: data.quantity,
      date: data.date,
      comments: data.comments,
    }).then(res => {
      console.log(res.data);
    });
  };

  const handle = e => {
    const newData = { ...data };

    newData[e.target.name] = e.target.value;

    setData(newData);

    console.log(newData);
  };

  // const reset = () => {
  //     setData(initialState);
  //   };

  return (
    <form onSubmit={e => submit(e)}>
      <SelectField
        onChange={e => handle(e)}
        name="nameOfCategory"
        value={data.nameOfCategory}
        options={options}
      />

      <div className={style.TransactionBox}>
        <label className={style.Transaction}>
          <input
            name="quantity"
            type="text"
            className={style.InputTransaction}
            value={data.quantity}
            onChange={e => handle(e)}
            placeholder="0.00"
          ></input>

          <Datetime
            className={style.Datetime}
            dateFormat="DD-MM-YYYY"
            timeFormat={false}
            onChange={e => handle(e)}
            value={data.date}
            name="date"
          />
          <button className={style.BtnCalendar}>
            <svg width="18" height="20">
              <use xlinkHref={`${sprite}#icon-newdate`}></use>
            </svg>
          </button>
        </label>

        <label className={style.CommentsBox}>
          <textarea
            placeholder="Комментарий"
            className={style.Comments}
            onChange={e => handle(e)}
            value={data.comments}
            name="comments"
          ></textarea>
        </label>
      </div>
    </form>
  );
}
