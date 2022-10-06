import { useState, useEffect } from "react";
import { DropDown } from "./DropDown";

import useCarrierStore from "../../../store/Carriers/carriers_store";

type Props = {
  style?: TailwindCustomedStyle_Component;
};

// definir datas !!!
const DropDownMenu = ({ style }: Props) => {
  const [visible, setVisible] = useState(false);
  const carriersState = useCarrierStore().state;

  useEffect(() => {}, [carriersState]);

  return (
    <nav className={style || "h-[100px]"}>
      <p onClick={() => setVisible(!visible)}>{carriersState.title}</p>
      <DropDown datas={carriersState} visible={visible} />
    </nav>
  );
};
export default DropDownMenu;
