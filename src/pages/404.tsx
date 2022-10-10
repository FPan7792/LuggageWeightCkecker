import Link from "next/link";
export const NotFound = () => {
	return (
		<div className="h-screen flex justify-center items-center flex-col  ">
			<h1 className="  text-2xl  ">Page non trouvée, désolé =(</h1>
			<Link href={"/"}>
				<div>
					<p className="mt-10 underline font-bold cursor-pointer ">
						Retourner vers l&apos;application{"  "}
						<span>👈</span>
					</p>
				</div>
			</Link>
		</div>
	);
};
export default NotFound;
