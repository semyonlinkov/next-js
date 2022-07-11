import Layout from '../components/Layout'
import '../styles/globals.scss'
import testImg from "../public/test.jpg";
import Image from 'next/image';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
	return <Layout>
		<Head>
			<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
		</Head>
		<main>
			<Component {...pageProps} />
		</main>
		<Image
			src={testImg}
			alt="preview"
			placeholder="blur"
		/>
	</Layout>
}

export default MyApp
