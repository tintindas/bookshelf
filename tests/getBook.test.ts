import { getBook } from '../src/getBook'
import Book from '../src/interfaces/Book'

describe('getBook', () => {
	let book: Book

	beforeAll(async () => {
		book = await getBook('The Last Wish', 'Andrzej Sapkowski')
	})

	it('Should be a book', () => {
		expect(book).toHaveProperty('printType', 'BOOK')
	})

	it('Should have contain information about the book', () => {
		expect(book).toHaveProperty('title')
		expect(book).toHaveProperty('authors')
		expect(book).toHaveProperty('pageCount')
		expect(book).toHaveProperty('description')
	})

	it('Should have thumbnails', () => {
		expect(book).toHaveProperty('imageLinks')
	})

	it('Should have categories', () => {
		expect(book.categories).toBeInstanceOf(Array)
	})
})
