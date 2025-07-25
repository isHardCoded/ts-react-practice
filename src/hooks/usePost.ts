import React from 'react'
import type { TPost } from '../models/Post'
import { postService } from '../services/PostService'

interface IUsePost {
	posts: TPost[]
	getPosts: () => void
}

export const usePost = (): IUsePost => {
	const [posts, setPosts] = React.useState<TPost[]>([])

	const getPosts = async () => {
		const data = await postService.getPosts()
		setPosts(data)
	}

	React.useEffect(() => {
		getPosts()
	}, [])

	return {
		posts,
		getPosts,
	}
}
