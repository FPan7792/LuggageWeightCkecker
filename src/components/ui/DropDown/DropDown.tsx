import { useEffect } from "react";
import useCarrierStore from "../../../store/Carriers/carriers_store";

const DropDown = ({
  visible,
  datas,
}: {
  visible: boolean;
  datas: Carrier_Store_States;
}) => {
  // !!WIP
  //   datas for test setup
  const { allCarriers, isLoading } = datas;
  const { selectedCarrier, setSelectedCarrier } = useCarrierStore();

  //   ON CLICK OUTSIDE CLOSE MENU DPD
  //   useEffect(() => {

  //     document.addEventListener("click",(e) => {

  //     })

  //     return () => {
  //         // function remove addlistener
  //     }
  //   })
  useEffect(() => {}, [selectedCarrier]);

  console.log("OUIIIII", selectedCarrier);

  return (
    <div
      className={
        // !!MANAGE UI
        visible
          ? " transition-all ease-out duration-1000  visible w-[100px]  bottom-0 left-0 text-red-600 bg-black"
          : " transition-all ease-out duration-1000 invisible"
      }
    >
      {!isLoading &&
        allCarriers.map((carrier, index) => (
          <div
            key={index}
            className=""
            onClick={() => setSelectedCarrier(carrier)}
          >
            <label>
              {carrier.label}
              {/* limit : {carrier.limit} */}
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
            </label>
          </div>
        ))}
    </div>
  );
};

export { DropDown };
