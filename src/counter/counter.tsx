import React, {useState} from "react";
import s from './counter.module.css'

export const Counter = () => {

  let [counter, setCounter] = useState<number>(0)

  return (

    <div className={s.wrapper__right}>
      <div className={s.form__top}>
        <div className={counter === 0 ? s.active__start : s.count && counter === 5 ? s.active__end : s.count}>
          {counter}
        </div>
      </div>
      <div className={s.form__bottom}>

        {/* <button disabled={counter === 5}
                className={counter === 5 ? s.button__disable :s.inc}
                onClick={() => {
                  setCounter((c) => c + 1)
                }}>
          inc
        </button>*/}

        <div className={counter === 5 ? s.button__disable : s.inc}
             onClick={() => {
               if (counter < 5) {
                 setCounter((c) => c + 1)
               }
             }}>
          inc
        </div>

        {/*<button disabled={counter === 0}
                className={counter === 0 ? s.button__disable :s.reset}
                onClick={() => {
                  setCounter((c) => 0)
                }}>
          reset
        </button>*/}

        <div className={counter === 0 ? s.button__disable : s.reset}
             onClick={() => {
               if (counter > 0) {
                 setCounter((c) => 0)
               }
             }}>
          reset
        </div>
      </div>
    </div>
  )
}