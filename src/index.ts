import { getBook } from './getBook'
import { addBook } from './addBook'
import { parseRequest } from './utils'

const req = `Title: The Last Wish
Author: Andrzej Sapkowski`

;(async () => {
	const [title, author] = parseRequest(req)

	const book = await getBook(title, author).catch((err) => console.log(err))

	if (book) {
		await addBook(book, '2021')
	} else {
		console.log('No book')
	}
})()
