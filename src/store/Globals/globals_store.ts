import create from "zustand";

// all utils states
const useGlobalsStore = create<Global_Store_State>((set) => ({
	currentPage: "Home",
	setCurrentPage: (pageName: Pages) => set({ currentPage: pageName }),
}));

export default useGlobalsStore;
