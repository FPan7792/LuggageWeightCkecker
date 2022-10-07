import { useEffect, useState } from "react";
import useCarrierStore from "../../store/Carriers/carriers_store";
import { DropDownMenuBase } from "../ui/DropDown";

type Props = {};

const CompagnySelector: React.FC<Props> = () => {
  const { initializeStore } = useCarrierStore();

  useEffect(() => {
    // !!!!Rename and fetch
    const displayDatas = async () => {
      await initializeStore();
    };
    displayDatas();
  }, []);

  // console.log("SCARREIR", selectedCarrier);

  return (
    <div className=" border-2 border-black border-solid ">
      <DropDownMenuBase />
    </div>
  );
};
export default CompagnySelector;
