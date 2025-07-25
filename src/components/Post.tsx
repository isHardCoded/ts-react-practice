import React from 'react'
import type { TPost } from '../models/Post'
import { usePost } from '../hooks/usePost'

interface Props {
	post: TPost
}

const Post: React.FC<Props> = ({ post }) => {
	const { title, body, setTitle, setBody, deletePost, editPost } = usePost()

	const [isEditing, setEditing] = React.useState<boolean>(false)

	const handleEdit = (id: number) => {
		editPost(id, { id: 1, userId: 1, title, body })
		setEditing(prev => !prev)
	}

	return (
		<li>
			<div>
				{isEditing ? (
					<div>
						<input
							type='text'
							value={title}
							onChange={e => setTitle(e.target.value)}
						/>
						<input
							type='text'
							value={body}
							onChange={e => setBody(e.target.value)}
						/>
						<button onClick={() => handleEdit(post.id)}>Сохранить</button>
						<button onClick={() => setEditing(false)}>Отменить</button>
					</div>
				) : (
					<>
						<h3>{post.title}</h3>
						<p>{post.body}</p>
						<button style={{ marginTop: 10 }} onClick={() => setEditing(true)}>
							Редактировать
						</button>
						<button
							style={{ marginLeft: 10 }}
							onClick={() => deletePost(post.id)}
						>
							Удалить
						</button>
					</>
				)}
			</div>
		</li>
	)
}

export default Post
