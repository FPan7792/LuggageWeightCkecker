import { ReactElement, useEffect } from "react";
import type { NextPageWithLayout } from "./_app";

import LayoutBase from "../components/Layout/LayoutBase";
import HeadLayer from "../components/HeadLayer/HeadLayer";

import useCarrierStore from "../store/Carriers/carriers_store";

import { InventoryBase } from "../components/Inventory";
import { BackPackBase } from "../components/BackPack";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import useInventoryStore from "../store/Inventory/inventory_store";
import { LoadSpinnerBase } from "../components/ui/Loader";
import useGlobalsStore from "../store/Globals/globals_store";

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
		<div className="xl:flex justify-center">
			<HeadLayer />
			<InventoryBase />
			<div className="xl:px-10 flex justify-center items-center ">
				<FontAwesomeIcon icon={faArrowRight} size="2x" />
			</div>
			<BackPackBase />
		</div>
	);
};

Page.getLayout = function getLayout(page: ReactElement) {
	return <LayoutBase>{page}</LayoutBase>;
};

export default Page;
