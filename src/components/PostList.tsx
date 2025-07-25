import React from 'react'

import Post from './Post'
import { usePost } from '../hooks/usePost'

const PostList: React.FC = () => {
	const { posts, getPosts } = usePost()

	React.useEffect(() => {
		getPosts()
	}, [])

	return (
		<ul>
			{posts.map(post => (
				<Post key={post.id} post={post} />
			))}
		</ul>
	)
}

export default PostList
