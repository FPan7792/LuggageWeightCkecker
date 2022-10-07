import { useState } from "react";
import useInventoryStore from "../../store/Inventory/inventory_store";
const BackPack = ({ style }: { style: string }) => {
  const { backPack } = useInventoryStore();

  const [empty, setEmpty] = useState<boolean>(true);
  const emptyStyle =
    "border-2 border-blue-500 border-solid xl:w-[20%] xl:min-w-[320px] xl:h-[500px]";

  return (
    <div
      className={
        empty
          ? emptyStyle
          : "border-2 border-blue-500 border-solid xl:w-[20%] xl:min-w-[320px] min-h-[600px] "
      }
    >
      <p>{backPack.title}</p>
    </div>
  );
};

export default BackPack;
