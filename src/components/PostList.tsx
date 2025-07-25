import React from 'react'

import Post from './Post'
import { usePost } from '../hooks/usePost'

const PostList: React.FC = () => {
	const { posts } = usePost()

	return (
		<ul>
			{posts.map(post => (
				<Post post={post} />
			))}
		</ul>
	)
}

export default PostList
