import Document, {
	DocumentContext,
	DocumentInitialProps,
	Html,
	Head,
	Main,
	NextScript,
} from "next/document";

class MyDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		const initialProps = await Document.getInitialProps(ctx);

		return initialProps;
	}
	render() {
		return (
			<Html lang="fr">
				<Head>
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
					<meta
						name="description"
						content="Calculateur de poids de bagages en ligne"
					/>
					<meta
						property="og:title"
						content="Airlines Carriers"
						key="title"
					/>

					{/* favicon */}
					<link rel="icon" href="/favicon.ico" />

					{/* fonts */}
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin=""
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
