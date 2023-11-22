/** @format */

import React from "react";
import { BsCircle } from "React-icons/bs";
import { AiOutlineStar } from "React-icons/ai";
export default function List1(props: {
  data2: string[];
  setNewList: Function;
  newList: string[];
  setList: Function;
}) {
  return (
    <div className="overflow-auto">
      <div className="flex-col justify-between">
        {props.data2.map((e) => {
          return (
            <div className="flex justify-between items-center ">
              {" "}
              <BsCircle
                onClick={() => {
                  props.setNewList([...props.newList, e]);
                  let list = props.data2.filter((v) => {
                    return v !== e;
                  });
                  // console.log(list, e);
                  props.setList(list);
                  // let arr = ["a", "b", "c"];
                  // let a = arr.filter((v) => {
                  //   return v !=='b';
                  // });
                  // console.log(a);
                }}
              />
              {e} <AiOutlineStar />
            </div>
          );
        })}
      </div>
    </div>
  );
}
