import { useEffect } from "react";
import useCarrierStore from "../../../store/Carriers/carriers_store";

const DropDown = ({
	visible,
	datas,
}: {
	visible: boolean;
	datas: Carrier_Store_States;
}) => {
	const { allCarriers, isLoading } = datas;
	const { selectedCarrier, setSelectedCarrier } = useCarrierStore();

	useEffect(() => {}, [selectedCarrier]);

	return (
		<div
			className={
				// !!MANAGE UI
				visible
					? "w-72 border-[1px] border-solid absolute transition ease-in duration-50 visible bg-[#FFFFFF] "
					: "w-72 border-[1px] border-solid absolute transition ease-out duration-50 invisible  bg-[#FFFFFF] "
			}
		>
			{!isLoading &&
				allCarriers.map((carrier, index) => (
					<div
						key={index}
						className=" cursor-pointer flex justify-between items-center p-2 hover:bg-slate-100 "
						onClick={() => setSelectedCarrier(carrier)}
					>
						<label>{carrier.label}</label>
						<input
							type="radio"
							value="option1"
							checked={selectedCarrier === carrier}
							onChange={(e) => {
								selectedCarrier !== carrier
									? (e.target.checked = false)
									: true;
							}}
						/>
					</div>
				))}
		</div>
	);
};

export { DropDown };
