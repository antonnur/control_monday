import React, {useState} from "react";
import s from './counter-value.module.css'

export const CounterValue = () => {

  return (
      <div className={s.wrapper__left}>
        <div className={s.form__top__left}>
          <div className={s.form__value}>
            <li>max value: <input type="number"/></li>
            <li>start value: <input type="number"/></li>
          </div>
        </div>
        <div className={s.form__bottom__left}>
          <div className={s.set}>
            set
          </div>
        </div>
      </div>
  )
}