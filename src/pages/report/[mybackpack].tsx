import { ReactElement } from "react";
import LayoutBase from "../../components/Layout/LayoutBase";
import type { NextPageWithLayout } from "../_app";
import HeadLayer from "../../components/HeadLayer/HeadLayer";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import BaseTab from "../../components/ui/BaseTab/BaseTab";
import useInventoryStore from "../../store/Inventory/inventory_store";
import { convertGramsInKilos } from "../../../utils/functions";
import useGlobalsStore from "../../store/Globals/globals_store";
import { useLayoutEffect } from "react";

const Page: NextPageWithLayout = () => {
	const { totalWeight, backPackItems } = useInventoryStore().backPack;

	const { setCurrentPage } = useGlobalsStore();

	useLayoutEffect(() => {
		setCurrentPage("Report");
	}, []);

	const content = (
		<>
			<div className={"m-4"}>
				{backPackItems.map((item) => (
					<div className="flex justify-between py-1" key={item.id}>
						<strong className="text-base capitalize">{item.label}</strong>

						<div className="flex justify-end flex-1">
							<span className="absolute">{item.weight + "g"}</span>
						</div>
					</div>
				))}
			</div>
			<div
				className={" flex justify-between py-4 px-2 border-t-2 border-b-2 "}
			>
				<strong className="text-base">Total</strong>
				<span className={""}>
					{totalWeight > 1000
						? convertGramsInKilos(totalWeight) + "kg"
						: totalWeight + "g"}
				</span>
			</div>
		</>
	);

	return (
		<div className="flex justify-center items-center flex-col ">
			{/* !!!set title and props */}
			<HeadLayer title="Airlines Carriers - MY BACKPACK" />
			<BaseTab title="MyBackPack" content={content} />
			<>
				<Link href={"/"}>
					<button className=" m-5 py-2 px-5 bg-black text-white ">
						<FontAwesomeIcon icon={faChevronLeft} color={"white"} />{" "}
						Retour{" "}
					</button>
				</Link>
			</>
		</div>
	);
};

Page.getLayout = function getLayout(page: ReactElement) {
	return <LayoutBase>{page}</LayoutBase>;
};

export default Page;
