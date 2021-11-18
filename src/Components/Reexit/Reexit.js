import React from "react";
import { useDispatch } from "react-redux";

import style from './Reexit.module.css';

import * as authOperation from '../../redux/auth/authOperation';


import Button from "../Button/Button";


const Reexit = ({toggleIsVisible}) => {

    const dispatch = useDispatch();
    const onClick=() => {
        toggleIsVisible();
        dispatch(authOperation.logOut())
         }


    return <div className={style.Modale}>
    <div className={style.Container} >
    <button className={style.Close} onClick={onClick}>X</button>
    <h1>Вы действительно хотите выйти?</h1>

    <ul>
        <li className={style.Item} ><Button onClick={onClick}>Да</Button>
        </li>
        <li><Button onClick={()=>{toggleIsVisible()}}>Нет</Button></li>
    </ul>
        </div>
    </div>

}

export default Reexit;