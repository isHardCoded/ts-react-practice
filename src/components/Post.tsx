import React from 'react'
import type { TPost } from '../models/Post'

interface Props {
	post: TPost
}

const Post: React.FC<Props> = ({ post }) => {
	return (
		<li>
			<div>
				<h3>{post.title}</h3>
				<p>{post.title}</p>
			</div>
		</li>
	)
}

export default Post
