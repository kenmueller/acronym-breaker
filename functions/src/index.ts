import { initializeApp } from 'firebase-admin'

initializeApp({
	storageBucket: 'acronym-breaker.appspot.com'
})

export { default as app } from './app'
