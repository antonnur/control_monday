import React from "react";
import s from './control.module.css'

export const Control = () => {

  function Counter(){
    let i = 0;
    return function(){
      return i++;
    };
  };



  return (
    <div className={s.wrapper}>
      <div className={s.form__top}>
        <div className={s.count}>
          0
        </div>
      </div>
      <div className={s.form__bottom}>
        <button onClick={()=>{
          console.log(Counter())}} className={s.inc}>
          inc
        </button>
        <button onClick={()=>{
          console.log('reset')}} className={s.reset}>
          reset
        </button>
      </div>
    </div>
  )
}