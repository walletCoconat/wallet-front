import React from "react";

import { useSelector } from "react-redux";
import sprite from '../../images/sprite.svg';

import * as authSelector from '../../redux/auth/authSelector';

import style from './Header.module.scss'

const Header = ({toggleIsVisible}) => {
const name = useSelector(authSelector.getName);



const onClick = () => {
    toggleIsVisible();
}

    return (
        <header className={style.Header}>
        <div className={style.Content}>
        <a className={style.Link}>
        <svg className={style.Logo}>
        <use  xlinkHref={`${sprite}#icon-logo`}></use>
        </svg>
        </a>
        <div className={style.User}>
            <span className={style.Name}>{name}</span>
           

            <button className={style.Button} onClick={()=>{toggleIsVisible()}} type='button'>
            <svg className={style.Exit}>
            <use  xlinkHref={`${sprite}#icon-exit`}></use>
            </svg> <p className={style.Text}>Выйти</p></button>
        </div>
        </div>
        
    </header>
      );
}




export default Header;