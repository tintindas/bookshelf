export default interface Book {
	title: string
	authors: Array<string>
	printType: string
	pageCount: number
	imageLinks: {
		[key: string]: string
	}
	description: string
	categories: Array<string>
}
