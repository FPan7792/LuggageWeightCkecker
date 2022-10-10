import { useState, useEffect, useRef } from "react";

import useCarrierStore from "../../../store/Carriers/carriers_store";
import useGlobalsStore from "../../../store/Globals/globals_store";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import { DropDown } from "./DropDown";

interface Props {
	style?: TailwindCustomedStyle_Component;
}

const DropDownMenu = ({ style }: Props) => {
	// dropdown manager
	const [visible, setVisible] = useState(false);

	const carriersState = useCarrierStore().state;
	const { currentPage } = useGlobalsStore();

	useEffect(() => {
		// close drowdown on click outside
		const closeDropDown = (e: any) => {
			if (currentPage !== "Report") {
				e.preventDefault();
				let find = false;
				e.composedPath().forEach((elem: any) => {
					if (elem === menu.current) {
						find = true;
					}
				});
				if (visible) {
					!find && setVisible(false);
				}
			}
		};

		document.addEventListener("click", closeDropDown);

		return () => {
			document.removeEventListener("click", closeDropDown);
		};
	}, []);

	// dropdown dom ref
	const menu = useRef<null | HTMLElement>(null);

	return (
		<nav
			onClick={() => {
				if (currentPage !== "Report") {
				}
				!visible ? setVisible(true) : setVisible(false);
			}}
			ref={menu}
			className={
				style ||
				"bg-white max-w-[200px] w-[160px] cursor-pointer relative border-[1px] border-solid border-gray-300 py-2 px-6 flex justify-center items-center "
			}
		>
			<span className="truncate ">{carriersState.title}</span>

			{currentPage !== "Report" && (
				<>
					<span className="px-2">
						<FontAwesomeIcon
							icon={!visible ? faChevronDown : faChevronUp}
						/>
					</span>

					<div className=" z-10 absolute left-0 -bottom-0 translate-y-2">
						<DropDown datas={carriersState} visible={visible} />
					</div>
				</>
			)}
		</nav>
	);
};
export default DropDownMenu;
