import React from 'react'
import type { TPost } from '../models/Post'
import { postService } from '../services/PostService'

interface IUsePost {
	posts: TPost[]
	title: string
	body: string
	setTitle: React.Dispatch<React.SetStateAction<string>>
	setBody: React.Dispatch<React.SetStateAction<string>>
	setPosts: React.Dispatch<React.SetStateAction<TPost[]>>
	getPosts: () => Promise<void>
	addPost: (newPost: TPost) => Promise<void>
	editPost: (id: number, updatedPost: TPost) => Promise<void>
	deletePost: (id: number) => Promise<void>
}

export const usePost = (): IUsePost => {
	const [posts, setPosts] = React.useState<TPost[]>([])
	const [title, setTitle] = React.useState<string>('')
	const [body, setBody] = React.useState<string>('')

	const getPosts = async () => {
		try {
			const data = await postService.getPosts()
			setPosts(data)
			console.log('Posts received')
		} catch (e) {
			console.log(e)
		}
	}

	const addPost = async (newPost: TPost) => {
		try {
			await postService.addPost(newPost)
			console.log(
				`New post added with data: \nid: ${newPost.id}\nuserId: ${newPost.userId}\ntitle: ${newPost.title}\ncontent: ${newPost.body}`
			)
			getPosts()
		} catch (e) {
			console.log(e)
		}
	}

	const editPost = async (id: number, updatedPost: TPost) => {
		try {
			await postService.editPost(id, updatedPost)
			console.log(`Post with id ${id} updated`)
			console.log(`Updated post: ${updatedPost.title}, ${updatedPost.body}`)
			getPosts()
		} catch (e) {
			console.log(e)
		}
	}

	const deletePost = async (id: number) => {
		try {
			await postService.deletePost(id)
			setPosts(prevPosts => prevPosts.filter(post => post.id !== id))
			console.log(`Post with id ${id} deleted`)
			getPosts()
		} catch (e) {
			console.log(e)
		}
	}

	return {
		posts,
		title,
		body,
		setTitle,
		setBody,
		getPosts,
		setPosts,
		addPost,
		editPost,
		deletePost,
	}
}
