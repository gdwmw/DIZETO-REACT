import React from "react";

export default function List({ qty, value }) {
  return (
    <>
      <li className="my-3 text-base">
        <span className="font-bold text-red-600">{qty}</span> {value}
      </li>
    </>
  );
}
