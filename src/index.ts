import axios from 'axios'

const formatString = (str: string): string => {
	return str.split(' ').join('+')
}

console.log(formatString('tintin das'))

// const addBooks = (title: string, author: string) : string => {

// }
