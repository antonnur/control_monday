import s from "../counter-value/counter-value.module.css";
import React, {FC, MouseEvent} from "react";

type PropsType = {
  disabled: boolean
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
}

export const Button: FC<PropsType> = (props) => {
  const {children, onClick, disabled} = props
  return (
    <div>

      <button className={`${s.button}`}
              disabled={disabled}
              onClick={onClick}
      >
        {children}
      </button>


    </div>
  )
}

