import { useState } from "react";

type Props = {};

export const CompagnySelector: React.FC<Props> = () => {
  const [test, setTest] = useState("Hello");

  const change = () => {
    test === "Hello" ? setTest("Salut") : setTest("Hello");
  };

  return <p onClick={change}>Je suis un composant {test}</p>;
};
export default CompagnySelector;
