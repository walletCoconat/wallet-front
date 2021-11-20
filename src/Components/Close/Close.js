import React from "react";
import style  from './Button.module.css';

const Close = ({children, ...props}) => {
    return <button {...props} className={style.Button}>
{children}
    </button>
}

export default Close;