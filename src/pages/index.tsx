import { ReactElement, useEffect } from "react";
import type { NextPageWithLayout } from "./_app";

import LayoutBase from "../components/Layout/LayoutBase";
import HeadLayer from "../components/HeadLayer/HeadLayer";
import { LoadSpinnerBase } from "../components/ui/Loader";

import { InventoryBase } from "../components/Inventory";
import { BackPackBase } from "../components/BackPack";

import useCarrierStore from "../store/Carriers/carriers_store";
import useInventoryStore from "../store/Inventory/inventory_store";
import useGlobalsStore from "../store/Globals/globals_store";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Page: NextPageWithLayout = () => {
	// CARRIER STATES
	const { isLoading } = useCarrierStore().state;
	const { initializeStore } = useCarrierStore();
	const { initializeInventoryStore, setupBackPack } = useInventoryStore();
	const { setCurrentPage } = useGlobalsStore();

	useEffect(() => {
		const displayDatas = async () => {
			setCurrentPage("Home");
			await initializeStore();
			await setupBackPack();
			await initializeInventoryStore();
		};
		displayDatas();
	}, []);

	if (isLoading) {
		return LoadSpinnerBase;
	}

	return (
		<div className=" xl:pb-10 flex-wrap flex justify-center flex-col items-center xl:items-start xl:flex-row xl:w-full my-0 mx-auto ">
			<HeadLayer />

			<InventoryBase />

			<div className=" py-5 xl:px-10 flex justify-center items-center my-auto mx-0 ">
				<p className="xl:-rotate-90">
					<FontAwesomeIcon icon={faArrowDown} size="2x" />
				</p>
			</div>

			<BackPackBase />
		</div>
	);
};

// use layer over every pages w/ this func
Page.getLayout = function getLayout(page: ReactElement) {
	return <LayoutBase>{page}</LayoutBase>;
};

export default Page;
