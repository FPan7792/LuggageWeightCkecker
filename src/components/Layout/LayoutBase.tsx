import CompagnySelector from "../CompagnySelector/CompagnySelector";

type Props = {
	children: JSX.Element;
};

const Layout: React.FC<Props> = ({ children }) => {
	return (
		// container
		<div className="xl:flex flex-col my-0 mx-auto max-w-[1440px] p-5 xl:px-[100px] xl:py-[50px] ">
			{/* header */}
			<div className="py-10 flex flex-col justify-center items-center">
				<CompagnySelector />
			</div>
			{/* body */}
			<div className="flex-grow">{children}</div>
		</div>
	);
};
export default Layout;
