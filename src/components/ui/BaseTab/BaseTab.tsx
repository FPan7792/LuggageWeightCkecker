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
				"shadow rounded xl:w-[20%] xl:min-w-[320px] h-full bg-[#FFFFFF] "
			}
		>
			<h1 className="font-bold text-center text-xl border-b-2 border-b-solid py-3">
				{title && title}
			</h1>

			{content}
		</div>
	);
};

export default BaseTab;
