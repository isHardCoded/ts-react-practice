import React from 'react'
import { usePost } from '../hooks/usePost'

const PostAdd: React.FC = () => {
	const { title, setTitle, body, setBody, addPost } = usePost()

	const handleAdd = () => {
		addPost({ id: 1, userId: 1, title, body })
		setBody('')
		setTitle('')
	}

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: 10,
				alignItems: 'start',
				maxWidth: 600,
				margin: '0 auto',
			}}
		>
			<h3>Добавить новый пост</h3>
			<input
				style={{ width: '100%' }}
				type='text'
				value={title}
				placeholder='Введите заголовок'
				onChange={e => setTitle(e.target.value)}
			/>
			<input
				style={{ width: '100%' }}
				type='text'
				value={body}
				placeholder='Введите содержимое'
				onChange={e => setBody(e.target.value)}
			/>
			<button onClick={handleAdd}>Добавить</button>
		</div>
	)
}

export default PostAdd
