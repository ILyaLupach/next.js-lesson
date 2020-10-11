import Link from 'next/link'
import { MainLayout } from '../components/MainLayout'

import { Post } from '../types/post'

const PostsPage = ({ posts }) => {
	return (
		<MainLayout title='posts page'>
			<h1>All Posts</h1>
			<ul>
				{posts?.map((post: Post) => (
					<li key={post.id}>
						<Link href={`/post/[id]`} as={`/post/${post.id}`}>
							{post.title}
						</Link>
					</li>
				))}
			</ul>
		</MainLayout>
	)
}

//метод будет выполняться на сервере и передавать пропсы
PostsPage.getInitialProps = async () => {
	const resp = await fetch(`${process.env.API_URL}/posts`)
	const posts: Post[] = await resp.json()
	return { posts }
}

export default PostsPage
