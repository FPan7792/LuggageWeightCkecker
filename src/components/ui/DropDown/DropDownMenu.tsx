import { useState, useEffect } from "react";
import { DropDown } from "./DropDown";

import useCarrierStore from "../../../store/Carriers/carriers_store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

type Props = {
	style?: TailwindCustomedStyle_Component;
};

// definir datas !!!
const DropDownMenu = ({ style }: Props) => {
	const [visible, setVisible] = useState(false);
	const carriersState = useCarrierStore().state;

	useEffect(() => {}, [carriersState]);

	return (
		<nav
			className={
				style ||
				" max-w-[200px] cursor-pointer relative border-[1px] border-solid py-2 px-6 flex justify-center items-center "
			}
			onClick={() => setVisible(!visible)}
		>
			<span className=" truncate mr-5">{carriersState.title}</span>

			{!visible ? (
				<FontAwesomeIcon icon={faChevronDown} />
			) : (
				<FontAwesomeIcon icon={faChevronUp} />
			)}

			<div className=" z-10 absolute left-0 -bottom-0 translate-y-2  ">
				<DropDown datas={carriersState} visible={visible} />
			</div>
		</nav>
	);
};
export default DropDownMenu;
