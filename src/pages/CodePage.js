import React from "react";
import { AiFillGithub } from "react-icons/ai";
export default function CodePage(props) {
  return (
    <div
      className="mt-8 flex cursor-pointer select-none justify-center"
      onClick={() => {
        window.open(props.link);
      }}
    >
      <AiFillGithub className="h-8 w-8" />
      <p className="font-burtons  text-2xl underline underline-offset-8">
        Code
      </p>
    </div>
  );
}
