import useInventoryStore from "../../store/Inventory/inventory_store";
import { InventoryItem } from "../InventoryItem";
import { BaseTab } from "../ui/BaseTab";

type Props = { style: string; Loader: JSX.Element };

const Inventory = ({ style, Loader }: Props) => {
	// INVENTORY STATES
	const { inventory, manageInventoryItems } = useInventoryStore();

	const isLoadingInventory = useInventoryStore().isLoading;
	const { items, totalItems, title } = inventory;

	const content = (
		<div className={style}>
			{isLoadingInventory ? (
				<div className=" xl:h-[400px] ">{Loader}</div>
			) : totalItems > 0 ? (
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
			) : (
				<p className="p-4 opacity-50 ">No item available...</p>
			)}
		</div>
	);

	return <BaseTab title={title} content={content} />;
};

export default Inventory;
