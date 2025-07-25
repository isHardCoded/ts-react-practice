import React from 'react'
import PostList from './components/PostList'
import PostAdd from './components/PostAdd'

const App: React.FC = () => {
	return (
		<>
			<PostAdd />
			<PostList />
		</>
	)
}
export default App
