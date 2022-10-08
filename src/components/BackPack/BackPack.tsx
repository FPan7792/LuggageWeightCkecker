import { useState, useEffect } from "react";
import { InventoryItem } from "../InventoryItem";

import { convertGramsInKilos } from "../../../utils/functions";
import useInventoryStore from "../../store/Inventory/inventory_store";
import useCarrierStore from "../../store/Carriers/carriers_store";

const BackPack = ({ style }: { style: string }) => {
	const { selectedCarrier } = useCarrierStore();
	const limit = useCarrierStore().selectedCarrier?.limit;

	const { backPack, manageInventoryItems } = useInventoryStore();
	const { title, backPackItems, totalWeight } = backPack;

	const [bpGauge, setBpGauge] = useState<"isEmpty" | "isMiddle" | "isFull">(
		"isEmpty"
	);
	const emptyStyle =
		"shadow rounded xl:flex xl:flex-col xl:justify-between xl:w-[20%] xl:min-w-[320px] xl:h-[500px]";

	// PAGE REPORT ??
	const [isReport, setIsReport] = useState(false);

	useEffect(() => {
		// IS REPORT ?
	}, [selectedCarrier]);

	useEffect(() => {
		if (limit) {
			if (totalWeight === 0) {
				setBpGauge("isEmpty");
			} else if (totalWeight >= limit) {
				setBpGauge("isFull");
			} else setBpGauge("isMiddle");
		}
	}, [backPack, selectedCarrier, limit]);

	return (
		<div
			className={
				bpGauge === "isEmpty"
					? emptyStyle
					: " shadow rounded xl:w-[20%] xl:min-w-[320px] h-full border-2 border-red-500 border-solid "
			}
		>
			<h1 className="font-bold text-center text-xl border-b-2 border-b-solid py-3  ">
				{isReport ? title : "Selected"}
			</h1>

			{/* LIST */}
			<div className="m-4">
				{backPackItems.map((item) => (
					<div key={item.id}>
						<InventoryItem
							item={item}
							manageInventoryItems={manageInventoryItems}
							intoComponent={"BACKPACK"}
							text={"Remove"}
						/>
					</div>
				))}
			</div>

			{/* TOTAL */}
			<div>
				<div
					className={
						" flex justify-between py-4 px-2 border-t-2 border-b-2 "
					}
				>
					<strong className="text-base">Total</strong>
					<span className={bpGauge === "isFull" ? "text-red-500" : ""}>
						{totalWeight > 1000
							? convertGramsInKilos(totalWeight) + "kg"
							: totalWeight + "g"}
					</span>
				</div>

				{/* VALIDATE BUTTON */}
				<div className="flex justify-center items-start">
					{bpGauge !== "isEmpty" && (
						<button
							disabled={bpGauge === "isFull"}
							className={
								(bpGauge === "isFull" ? "bg-slate-400" : "bg-black") +
								" text-sm  w-full mx-2 my-5 p-3 text-white"
							}
						>
							See Resume
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default BackPack;
