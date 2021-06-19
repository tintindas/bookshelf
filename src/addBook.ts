import fs from 'fs/promises'
import Book from './interfaces/Book'
import { getFilePath } from './utils'

const addBook = async (book: Book) => {
	const filePath = getFilePath('2021')

	const fileData = await fs
		.readFile(filePath, { encoding: 'utf8' })
		.catch((err) => console.log(err))

	const bookData = fileData ? fileData : ''

	if (bookData === '') return

	const books = JSON.parse(bookData)

	books.unshift(book)
	const updatedData = JSON.stringify(books)

	fs.writeFile(filePath, updatedData)
}

export { addBook }

// ;(async () => {
// 	addBook(data)
// })()
