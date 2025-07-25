import type { TPost } from '../models/Post'

interface IPostService {
	getPosts: () => Promise<TPost[]>
	addPost: (newPost: TPost) => Promise<void>
	editPost: (id: number, updatedPost: TPost) => Promise<void>
	deletePost: (id: number) => Promise<void>
}

export const postService: IPostService = {
	getPosts: async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts')
		const data: TPost[] = await response.json()
		return data
	},

	addPost: async newPost => {
		await fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ newPost }),
		})
	},

	editPost: async (id, updatedPost) => {
		await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(updatedPost),
		})
	},

	deletePost: async id => {
		await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
			method: 'DELETE',
		})
	},
}
