import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './Currency.module.scss';

const Currency = () => {
  const [currency, setCurrency] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const PRIVAT_BASE_URL =
    'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

  useEffect(() => {
    fetch(PRIVAT_BASE_URL)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setIsLoaded(true);
        setCurrency(data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className={s.CurrencyContainer}>
      <table>
        <tbody>
          <tr className={s.TableHeading}>
            <td>Валюта</td>
            <td>Покупка</td>
            <td>Продажа</td>
          </tr>
        </tbody>
      </table>
      <ul className={s.TableList}>
        {currency.slice(0, 3).map(item => (
          <li key={uuidv4()} className={s.ListItem}>
            <table>
              <tbody>
                <tr>
                  <td>{item.ccy}</td>
                  <td>{item.buy}</td>
                  <td>{item.sale}</td>
                </tr>
              </tbody>
            </table>
          </li>
        ))}
      </ul>
      <div className={s.BackgroundContainer}></div>
    </div>
  );
};

export default Currency;
