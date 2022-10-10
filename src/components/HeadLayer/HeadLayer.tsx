import Head from "next/head";

type Props = {
	title?: string;
	content?: string;
	favicon?: string;
};

// basic and reusable head customizable component
const HeadLayer = ({ title, content, favicon }: Props) => {
	const defaultTitle = "Airlines Carriers";
	const defaultdescription = "Calculateur de poids de bagages en ligne";
	const defaultfaviconPath = "/favicon.ico";

	return (
		<Head>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0"
			/>
			<meta name="description" content={content || defaultdescription} />
			<title>{title || defaultTitle}</title>
			<link rel="icon" href={favicon || defaultfaviconPath} />
		</Head>
	);
};

export default HeadLayer;
