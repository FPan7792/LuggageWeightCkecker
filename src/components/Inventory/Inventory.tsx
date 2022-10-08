import useInventoryStore from "../../store/Inventory/inventory_store";
import { InventoryItem } from "../InventoryItem";

type Props = { style: string; Loader: JSX.Element };

const Inventory = ({ style, Loader }: Props) => {
	// INVENTORY STATES
	const { inventory, manageInventoryItems } = useInventoryStore();

	const isLoadingInventory = useInventoryStore().isLoading;
	const { items } = inventory;

	return (
		<div className=" shadow rounded xl:w-[20%] xl:min-w-[320px] h-full ">
			<h1 className="font-bold text-center text-xl border-b-2 border-b-solid py-3  ">
				{inventory.title}
			</h1>
			{isLoadingInventory ? (
				<div className=" xl:h-[400px] ">{Loader}</div>
			) : (
				<div className="m-4">
					{items.map((item) => (
						<div key={item.id}>
							<InventoryItem
								item={item}
								manageInventoryItems={manageInventoryItems}
								intoComponent={"INVENTORY"}
								text={"Add"}
							/>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Inventory;
