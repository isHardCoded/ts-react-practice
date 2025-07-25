import type { Post } from '../models/Post'

interface IPostService {
	getPosts: () => Promise<Post[]>
}

export const postService: IPostService = {
	getPosts: async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts')
		const data: Post[] = await response.json()
		return data
	},
}
