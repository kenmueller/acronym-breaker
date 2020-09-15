import { useCallback, FormEvent, ChangeEvent } from 'react'
import Router from 'next/router'
import { atom, useRecoilState } from 'recoil'

import sanitizeAcronym from 'lib/sanitizeAcronym'

import styles from 'styles/Search.module.scss'

const acronymState = atom({
	key: 'acronym',
	default: ''
})

const Search = () => {
	const [acronym, setAcronym] = useRecoilState(acronymState)
	
	const onSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		Router.push('/[acronym]', `/${acronym.toLowerCase()}`)
	}, [acronym])
	
	const onInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		setAcronym(sanitizeAcronym(event.target.value))
	}, [setAcronym])
	
	return (
		<form className={styles.root} onSubmit={onSubmit}>
			<input
				className={styles.input}
				required
				placeholder="Acronym"
				value={acronym}
				onChange={onInputChange}
			/>
			<button className={styles.button}>
				Generate
			</button>
		</form>
	)
}

export default Search
