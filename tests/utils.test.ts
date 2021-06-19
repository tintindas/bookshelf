import { formatString, getFilePath, cleanCategories } from '../src/utils'

describe('Format String', () => {
	it('Should format input string replacing spaces with the plus symbol', () => {
		const input = 'The Last Wish'
		const output = 'The+Last+Wish'
		expect(formatString(input)).toBe(output)
	})

	it('Should throw an error for empty string', () => {
		const input = ''

		expect(() => {
			formatString(input)
		}).toThrowError('Empty input string')
	})
})

describe('Clean up categories', () => {
	const input = [
		'Fiction ',
		' Fantasy ',
		' Epic',
		' Collections & Anthologies',
		' Action & Adventure',
		' Dragons & Mythical Creatures'
	]

	it('Should return an array', () => {
		expect(cleanCategories(input)).toBeInstanceOf(Array)
	})
})

describe('Get File Path', () => {
	it('Should get the file path', () => {
		const input = '2021'
		const output =
			'/home/tintin/projects/webDev/bookshelf/books_by_year/2021.json'

		expect(getFilePath(input)).toBe(output)
	})
})
