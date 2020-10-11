import { NextPageContext } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { MainLayout } from '../../components/MainLayout'

import { Post } from '../../types/post'

const PostItem = ({ post: serverPost }) => {
  const [post, setPost] = useState<Post>(serverPost)
  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter()

  useEffect(() => {
    !serverPost && getPost()
  }, [])

  const getPost = async () => {
    setLoading(true)
    const resp = await fetch(`${process.env.API_URL}/posts/${router.query.id}`)
    const post: Post = await resp.json()
    setPost(post)
    setLoading(false)
  }

  return (
    <MainLayout >
      {loading ? <h2>loading...</h2> : (
        <>
          <h1>{post?.title}</h1>
          <p>{post?.body}</p>
          <p><Link href='/posts'>Back to all posts</Link></p>
        </>
      )}
    </MainLayout>
  )
}

PostItem.getInitialProps = async ({ query, req }: NextPageContext) => {
  if (!req) return {}
  const resp = await fetch(`${process.env.API_URL}/posts/${query.id}`)
  const post: Post = await resp.json()
  return { post }
}


// export const getServerSideProps: GetServerSideProps = async ({ query, req }) => {
//   const resp = await fetch(`${process.env.API_URL}/posts/${query.id}`)
//   const post: Post = await resp.json()
//   return { props: { post } }
// }

export default PostItem
