const sanitizeAcronym = (acronym: string) =>
	acronym.replace(/[^a-z0-9]/ig, '').toUpperCase()

export default sanitizeAcronym
