import axios from 'axios'
import Book from './interfaces/Book'
interface SearchResponse {
	items: Array<{ id: string }>
}

interface VolumeInfo {
	volumeInfo: Book
}

const formatString = (str: string): string => {
	if (str === '') {
		throw Error('Empty input string')
	}

	return str.split(' ').join('+')
}

const getBook = async (title: string, author: string): Promise<Book> => {
	const titleQuery: string = formatString(title)
	const authorQuery: string = formatString(author)

	const SEARCH_URL = `https://www.googleapis.com/books/v1/volumes?q=intitle:${titleQuery}+inauthor:${authorQuery}&printType=books`

	const { data }: { data: SearchResponse } = await axios
		.get(SEARCH_URL)
		.catch((err) => {
			throw new Error(err)
		})

	const { items } = data
	const id = items[0].id

	const BOOK_URL = `https://www.googleapis.com/books/v1/volumes/${id}`

	const { data: bookData }: { data: VolumeInfo } = await axios
		.get(BOOK_URL)
		.catch((err) => {
			throw new Error(err)
		})

	const {
		title: bookTitle,
		authors,
		printType,
		pageCount,
		imageLinks,
		description,
		categories
	} = bookData.volumeInfo

	const book: Book = {
		title: bookTitle,
		authors,
		printType,
		pageCount,
		imageLinks,
		description,
		categories
	}

	return book
}

export { formatString, getBook }

// ;(async () => {
// 	console.log(await getBook('The Last Wish', 'Andrzej Sapkowski'))
// })()
