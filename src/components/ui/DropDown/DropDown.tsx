import { useEffect } from "react";

const DropDown = ({ visible }: { visible: boolean }) => {
  // !!WIP
  //   datas for test setup
  const datas = [1, 2, 3];

  //   ON CLICK OUTSIDE CLOSE MENU DPD
  //   useEffect(() => {

  //     document.addEventListener("click",(e) => {

  //     })

  //     return () => {
  //         // function remove addlistener
  //     }
  //   })

  return (
    <div
      className={
        // !!MANAGE UI
        visible
          ? " transition-all ease-out duration-1000  visible w-[100px]  bottom-0 left-0 text-red-600 bg-black"
          : " transition-all ease-out duration-1000 invisible"
      }
    >
      {datas.map((data, index) => (
        <div className="">
          <label>
            Option {data}
            {/* <input type="radio" value="option1" checked={true} /> */}
            <input type="radio" value="option1" />
          </label>
        </div>
      ))}
    </div>
  );
};

export { DropDown };
