import { useState, useEffect } from "react";
import { InventoryItem } from "../InventoryItem";

import { convertGramsInKilos } from "../../../utils/functions";
import useInventoryStore from "../../store/Inventory/inventory_store";
import useCarrierStore from "../../store/Carriers/carriers_store";
import Link from "next/link";
import { BaseTab } from "../ui/BaseTab";

const BackPack = ({ style }: { style?: string }) => {
	// CARRIER STATES
	const { selectedCarrier } = useCarrierStore();
	const limit = useCarrierStore().selectedCarrier?.limit;

	// BACKPACK STATES
	const { backPack, manageInventoryItems } = useInventoryStore();
	const { title, backPackItems, totalWeight } = backPack;

	// LOCAL STATE
	const [bpGauge, setBpGauge] = useState<"isEmpty" | "isMiddle" | "isFull">(
		"isEmpty"
	);

	useEffect(() => {
		if (limit) {
			if (totalWeight === 0) {
				setBpGauge("isEmpty");
			} else if (totalWeight >= limit) {
				setBpGauge("isFull");
			} else setBpGauge("isMiddle");
		}
	}, [backPack, selectedCarrier, limit]);

	const content = (
		<div className={style}>
			{/* LIST */}
			<div className={bpGauge === "isEmpty" ? "h-[300px]" : "m-4"}>
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
					<Link
						href={{
							pathname: "/report/[mybackpack]",
							query: { mybackpack: "mybackpack" },
						}}
					>
						<button
							disabled={bpGauge !== "isMiddle"}
							className={
								(bpGauge !== "isMiddle" && "opacity-50") +
								" text-sm  w-full mx-2 my-5 p-3 text-white bg-black "
							}
						>
							See Resume
						</button>
					</Link>
				</div>
			</div>
		</div>
	);

	return <BaseTab title={title} content={content} />;
};

export default BackPack;
