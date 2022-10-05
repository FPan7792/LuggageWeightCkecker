import { useState } from "react";
import { DropDownMenuBase } from "../ui/DropDown";

type Props = {};

export const CompagnySelector: React.FC<Props> = () => {
  // const [test, setTest] = useState("Hello");

  // const change = () => {
  //   test === "Hello" ? setTest("Salut") : setTest("Hello");
  // };

  return (
    <div className=" border-2 border-black border-solid ">
      <DropDownMenuBase />
    </div>
  );
};
export default CompagnySelector;
