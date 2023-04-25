import React from "react";
import style from "./Button.module.css";

const Button = ({ dispatch, increaseBtnCount, name }) => {
  return (
    <div className={style.btn}>
      <button
        onClick={() => {
          dispatch(increaseBtnCount({ name: name }));
        }}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
