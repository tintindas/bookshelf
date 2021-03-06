import path from 'path'

const formatString = (str: string): string => {
	if (str === '') {
		throw Error('Empty input string')
	}

	return str.split(' ').join('+')
}

const cleanCategories = (categories: Array<string>) => {
	const cleanedCategories = new Set<string>()
	categories.forEach((category) => {
		category.split('/').forEach((genre) => {
			cleanedCategories.add(genre)
		})
	})
	return Array.from(cleanedCategories)
}

const getFilePath = (year: string): string => {
	const filePath = path.join(__dirname, '..', 'books_by_year', `${year}.json`)
	return filePath
}

const parseRequest = (req: string) => {
	const parsedRequest = req.split('\n').map((item) => {
		return item.split(':')[1].trim()
	})

	return parsedRequest
}

export { formatString, cleanCategories, getFilePath, parseRequest }
