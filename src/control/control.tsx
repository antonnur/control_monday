import React, {useState} from "react";
import s from './control.module.css'

export const Control = () => {

  let [counter, setCounter] = useState(0)

  return (
    <div className={s.wrapper}>
      <div className={s.form__top}>
        <div className={s.count}>
          {counter}
        </div>
      </div>
      <div className={s.form__bottom}>
        <button className={s.inc} onClick={() => {
          setCounter((c) => c + 1)
        }}>
          inc
        </button>
        <button className={s.reset} onClick={() => {
          setCounter((c) => 0)
        }}>
          reset
        </button>
      </div>
    </div>
  )
}