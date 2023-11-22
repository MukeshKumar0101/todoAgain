/** @format */

import React from "react";
import { IoIosArrowUp } from "React-icons/io";

export default function Completed(props: { flip: Function; value: boolean }) {
  return (
    <div className="font-bold flex justify-between items-center">
      <h1>Completed</h1>
      <IoIosArrowUp
        className={props.value ? "rotate-180" : ""}
        onClick={() => {
          props.flip(!props.value);
        }}
      />
    </div>
  );
}
