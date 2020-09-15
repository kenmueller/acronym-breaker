import axios from 'axios'

interface Word {
	word: string
	score: number
}

const generateResult = async (acronym: string) => {
	const words = await Promise.all(acronym.split('').map(async letter => {
		try {
			const words: Word[] = (
				await axios.get(`https://api.datamuse.com/words?sp=${letter}*`)
			).data
			
			return words.length
				? words[Math.floor(Math.random() * words.length)].word
				: null
		} catch {
			return null
		}
	}))
	
	return words.filter(Boolean).join(' ')
}

export default generateResult
