import { useState } from "react";
import { DropDown } from "./DropDown";

type Props = {
  // !!define datas
  datas?: any;
  style?: TailwindCustomedStyle_Component;
};

// definir datas !!!
const DropDownMenu = ({ datas, style }: Props) => {
  const [visible, setVisible] = useState(false);

  return (
    <nav className={style || "h-[100px]"}>
      <p onClick={() => setVisible(!visible)}>Airplanes</p>
      <DropDown visible={visible} />
    </nav>
  );
};
export default DropDownMenu;
