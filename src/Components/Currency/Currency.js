import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import WhiteSpinnerLoader from '../SpinnerLoader/WhiteSpinnerLoader';
import s from './Currency.module.scss';

const Currency = () => {
  const [currency, setCurrency] = useState([]);
  const [loading, setLoading] = useState(false);

  const PRIVAT_BASE_URL =
    'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

  useEffect(() => {
    setLoading(true);
    fetch(PRIVAT_BASE_URL)
      .then(res => res.json())
      .then()
      .then(data => {
        setCurrency(data);
      })
      .then(setLoading(false))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <div className={s.Container}>
        <ul className={s.HorizontalList}>
          <li>Валюта</li>
          <li>Покупка</li>
          <li>Продажа</li>
        </ul>
        {loading ? (
          <WhiteSpinnerLoader />
        ) : (
          <ul className={s.Data}>
            {currency.slice(0, 3).map(item => (
              <li key={uuidv4()}>
                <ul className={s.HorizontalList}>
                  <li className={s.CurrencyItem}>{item.ccy}</li>
                  <li className={s.CurrencyItem}>
                    {Number(item.buy).toFixed(2)}
                  </li>
                  <li className={s.CurrencyItem}>
                    {Number(item.sale).toFixed(2)}
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Currency;
