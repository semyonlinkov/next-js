import React, { useEffect } from 'react';
import Heading from '../components/Heading';
import styles from '../styles/404.module.scss';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';


const Error = () => {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			router.push('/');
		}, 3000);
	}, [router]);

	return (
		<div className={styles.wrapper}>
			<Head>
				<title>Error</title>
			</Head>
			<div>
				<Heading text="404" />
				<Heading tag="h2" text="Something went wrong" />
			</div>
		</div>
	);
};

export default Error;
