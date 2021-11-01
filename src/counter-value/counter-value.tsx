import React, {useEffect, useState} from "react";
import s from './counter-value.module.css'

export const CounterValue = () => {

  const [maxValue, setMaxValue] = useState<number>(0)
  const [startValue, setStartValue] = useState<number>(0)

  useEffect(() => {
    localStorage.setItem('counterValue', JSON.stringify(maxValue))
  }, [maxValue])

  // const setHandler = () => {
  //   setMaxValue(maxValue + 1)
  // }

  // const setHandler = (e: ChangeEvent<HTMLInputElement>) => setMaxValue(e.currentTarget.value)


  return (
    <div className={s.wrapper__left}>
      <div className={s.form__top__left}>
        <div className={s.form__value}>
          <li>max value:
            <input
              type="number"
              value={maxValue}
            />
          </li>
          <li>start value:
            <input
              type="number"
              value={startValue}
            />
          </li>
        </div>
      </div>
      <div className={s.form__bottom__left}>
        <div className={s.set}>
          {/*onClick={setHandler}*/}
          set
        </div>
      </div>
    </div>
  )
}