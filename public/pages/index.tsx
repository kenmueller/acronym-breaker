import Head from 'next/head'

import Navbar from 'components/Navbar'
import Search from 'components/Search'

import styles from 'styles/Home.module.scss'

const Home = () => (
	<div className={styles.root}>
		<Head>
			<title key="title">Acronym Breaker</title>
			<meta
				name="description"
				content="Generate ridiculous acronyms at Acronym Breaker."
			/>
		</Head>
		<Navbar />
		<section className={styles.content}>
			<h1 className={styles.title}>
				Generate ridiculous acronyms
			</h1>
			<Search />
		</section>
	</div>
)

export default Home
