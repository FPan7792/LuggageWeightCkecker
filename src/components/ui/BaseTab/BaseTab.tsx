interface Props {
	title?: string;
	content?: JSX.Element;
	style?: string;
}

const BaseTab = ({ title, content, style }: Props) => {
	return (
		<div
			className={
				style ||
				" transition ease-out shadow rounded xl:w-[20%] xl:min-w-[320px] h-full bg-[#FFFFFF] w-[100%] min-w-[200px] md:w-[380px] max-w-[400px] "
			}
		>
			<h1 className="font-bold text-center text-2xl border-b-2 border-b-solid py-3 font-title-writings">
				{title && title}
			</h1>

			{content}
		</div>
	);
};

export default BaseTab;
