import React, {ChangeEvent, useEffect, useState} from "react";
import s from './counter-setting.module.css'
import {Button} from "../button/button";

type PropsType = {
  maxValue: number
  setMaxValue: (value: number) => void
  startValue: number
  setStartValue: (value: number) => void
  setCounter: (value: number) => void
  setIsCounter: (value: boolean) => void
  setError: (value: string | null) => void
}

export const CounterSetting: React.FC<PropsType> = ({startValue, maxValue, setMaxValue, setStartValue, setCounter, setIsCounter, setError}) => {

  useEffect(() => {
    let maxValueAsString = localStorage.getItem('MaxValue') //получаем JSON строку
    if (maxValueAsString) {
      let newValue = JSON.parse(maxValueAsString)
      //parse - парсим обратно в {} либо [] (преобразования JSON обратно в объект)
      setMaxValue(newValue)
    }

    let startValueAsString = localStorage.getItem('StartValue')
    if (startValueAsString) {
      let newValue = JSON.parse(startValueAsString)
      setStartValue(newValue)
      setCounter(newValue)
    }
  },[])

  let [isDis, setIsDis] = useState(false)

  const countMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    const changeMaxValue = Number(e.currentTarget.value)
    if (changeMaxValue < 0) {
      return setError('Incorrect value!')
    }
    setMaxValue(changeMaxValue)
    setIsDis(false)
    setIsCounter(false)
  }

  const countStartValue = (e: ChangeEvent<HTMLInputElement>) => {
    const changeStartValue = Number(e.currentTarget.value)
    if (changeStartValue < 0) {
      return setError('Incorrect value!')
    }
    setStartValue(changeStartValue)
    setIsDis(false)
    setIsCounter(false)
  }

  const setHandler = () => {
    localStorage.setItem('MaxValue', JSON.stringify(maxValue))
    //stringify - приводим к строке (преобразования объектов в JSON)
    localStorage.setItem('StartValue', JSON.stringify(startValue))
    setCounter(startValue)
    setIsCounter(true)
    setIsDis(true)
  }

  return (
    <div className={s.wrapper__left}>
      <div className={s.form__top__left}>
        <div className={s.form__value}>
          <li>max value:
            <input
              type="number"
              onChange={countMaxValue}
              value={maxValue}
            />
          </li>
          <li>start value:
            <input
              type="number"
              onChange={countStartValue}
              value={startValue}
            />
          </li>
        </div>
      </div>
      <div className={s.form__bottom__left}>
        <div className={s.button__set}>
          <Button disabled={isDis}
                  onClick={setHandler}>
            set
          </Button>
        </div>
      </div>
    </div>
  )
}