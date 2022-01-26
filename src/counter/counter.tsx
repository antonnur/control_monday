import React, {FC} from "react";
import s from './counter.module.css'
import {Button} from "../button/button";

type PropsType = {
  counter: number   //startValue
  setCounter: (value: number) => void
  maxValue: number
  startValue: number
  error: string | null
  isCounter: boolean;
}

export const Counter: FC<PropsType> = (props) => {
  const {counter, maxValue, setCounter, startValue, error, isCounter} = props;

  /*if (!isCounter) {
    return <div>Нажнимте кнопку set</div>
  }*/

  return (
    <div className={s.wrapper__right}>
      <div className={s.form__top}>
        <div className={error !== null || !isCounter ? s.error : counter === maxValue ? s.active__end : s.active__start }>
          {error ? error : !isCounter ? <span className={s.is__counter}>Нажнимте кнопку set!</span> : counter}
        </div>
      </div>
      <div className={s.form__bottom}>
        <div className={s.button__inc}>
          <Button disabled={!!error || counter === maxValue || !isCounter}
                  onClick={() => {
                    if (counter < maxValue) {
                      setCounter(counter + 1)
                    }
                  }}>
            inc
          </Button>
        </div>
        <div className={s.button__reset}>
          <Button disabled={!!error || !isCounter}   // !!error или error ? true : false
                  onClick={() => {
                    if (counter <= maxValue) {
                      setCounter(startValue)
                    }
                  }}>
            reset
          </Button>
        </div>
      </div>
    </div>
  )
}