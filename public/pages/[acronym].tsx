import { useState, useCallback, useEffect } from 'react'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import CopyToClipboard from 'react-copy-to-clipboard'
import { toast } from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareSquare } from '@fortawesome/free-solid-svg-icons'

import sanitizeAcronym from 'lib/sanitizeAcronym'
import generateResult from 'lib/generateResult'
import Navbar from 'components/Navbar'

import styles from 'styles/Acronym.module.scss'

export interface AcronymPageProps {
	result: string
}

const AcronymPage = ({ result: _result }: AcronymPageProps) => {
	const acronym = sanitizeAcronym(useRouter().query.acronym as string)
	const [result, setResult] = useState(_result)
	
	const url = `https://acronym-breaker.web.app/${acronym.toLowerCase()}`
	
	const regenerate = useCallback(async () => {
		setResult(await generateResult(acronym))
	}, [setResult, acronym])
	
	const onShare = useCallback(() => {
		toast.success('Copied URL to clipboard')
	}, [])
	
	useEffect(() => {
		setResult(_result)
	}, [setResult, _result])
	
	return (
		<div className={styles.root}>
			<Head>
				<title key="title">
					{acronym} - Acronym Breaker
				</title>
				<meta
					name="description"
					content={`${acronym} = ${result}. Generate ridiculous acronyms at Acronym Breaker.`}
				/>
			</Head>
			<Navbar search />
			<h1 className={styles.result}>{result}</h1>
			<footer className={styles.footer}>
				<p className={styles.acronym}>{acronym}</p>
				<button className={styles.regenerate} onClick={regenerate}>
					Regenerate
				</button>
				<CopyToClipboard text={url} onCopy={onShare}>
					<button className={styles.share}>
						<FontAwesomeIcon
							className={styles.shareIcon}
							icon={faShareSquare}
						/>
					</button>
				</CopyToClipboard>
			</footer>
		</div>
	)
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => ({
	props: {
		result: await generateResult(query.acronym as string)
	}
})

export default AcronymPage
