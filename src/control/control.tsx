import React, {useState} from "react";
import s from './control.module.css'

export const Control = () => {

  let [counter, setCounter] = useState(0)

  return (
    <div className={s.wrapper}>
      <div className={s.form__top}>
        <div className={counter === 0 ? s.active__start : s.count && counter === 5 ? s.active__end : s.count}>
          {counter}
        </div>
      </div>
      <div className={s.form__bottom}>
        <button disabled={counter === 5}
                className={counter === 5 ? s.button__disable :s.inc}
                onClick={() => {
                  setCounter((c) => c + 1)
                }}>
          inc
        </button>
        <button disabled={counter === 0}
                className={counter === 0 ? s.button__disable :s.reset}
                onClick={() => {
                  setCounter((c) => 0)
                }}>
          reset
        </button>
      </div>
    </div>
  )
}