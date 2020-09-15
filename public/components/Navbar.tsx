import Link from 'next/link'

import Search from './Search'

import styles from 'styles/Navbar.module.scss'

export interface NavbarProps {
	search?: boolean
}

const Navbar = ({ search = false }: NavbarProps) => (
	<nav className={styles.root}>
		<Link href="/">
			<a className={styles.title}>
				Acronym Breaker
			</a>
		</Link>
		{search && <Search />}
	</nav>
)

export default Navbar
