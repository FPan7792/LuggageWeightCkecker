import { useState } from "react";
import { Item_Mutable_Object } from "../../store/Inventory/inventory_store";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

interface Props {
  item: Item_Mutable_Object;
  manageInventoryItems: (item: Item_Mutable_Object) => void;
  intoComponent: "BACKPACK" | "INVENTORY";
  text: string;
}

export const InventoryItem = ({
  item,
  manageInventoryItems,
  intoComponent,
  text,
}: Props) => {
  return (
    <div
      className="group flex justify-between py-1 cursor-pointer "
      key={item.id}
      onClick={() => manageInventoryItems(item)}
    >
      <strong className="text-base">{item.label}</strong>

      <div className="flex justify-end flex-1">
        <span className="absolute group-hover:invisible">
          {item.weight + "g"}
        </span>

        <span className="text-emerald-500 transition duration-500 ease-in-out invisible -translate-x-5 group-hover:visible group-hover:translate-x-0 ">
          {text}
          <span className="px-1">
            <FontAwesomeIcon icon={faArrowRightLong} size={"sm"} />
          </span>
        </span>
      </div>
    </div>
  );
};
export default InventoryItem;
