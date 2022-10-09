import create from "zustand";

const useGlobalsStore = create<Global_Store_State>((set) => ({
	currentPage: "Home",
	setCurrentPage: (pageName: Pages) => set({ currentPage: pageName }),
}));

export default useGlobalsStore;
