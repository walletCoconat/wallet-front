import React from "react";
import style from './Reenter.module.css';

import * as authOperation from '../../redux/auth/authOperation';

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {getEmail} from '../../redux/auth/authSelector';
import {verify} from '../../redux/auth/authOperation';
import Button from "../Button/Button";

const Reenter = ({toggleIsVisible}) => {
const email = useSelector(getEmail);

    const dispatch = useDispatch();
    const onClick=() => {
        toggleIsVisible();
       
         }


    return <div className={style.Modale}>
    <div  onClick={()=>{toggleIsVisible()}}>X</div>

<p> Почти там…</p>

<p> Проверьте свою электронную почту (`${email}`) для подтверждения учетной записи. </p>

<p>Если `${email}`не является адресом электронной почты, вернитесь назад и введите нужный адрес.</p>

   <p>Если вы не получили наше электронное письмо в течение 15 минут, проверьте папку со спамом

</p>
<p>Всё ещё не можете найти?</p>
{console.log(email)}
<Button type='button' onClick={()=>{
    
    dispatch(verify({email}))}}>Отправить еще раз</Button>



{/*  */}

    </div>

}

export default Reenter;