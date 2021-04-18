import { GetStaticProps, NextPage } from 'next'
import getAllPosts from '../utils/getAllPosts'
import Layout from '../components/Layout'
import readMarkdown, { PostContent } from '../utils/readMarkDown'
import { join } from 'path'
import Link from 'next/link'

const MARKDOWN_DIR = join(process.cwd())

interface Props {
  totalCount: number
  currentCount: number
  posts: PostContent[]
}

const Home: NextPage<Props> = ({ totalCount, currentCount, posts }: Props) => {
  return (
    <>
      <Layout>
        {posts.map((post, i) => {
          return (
            <div key={i}>
              <Link href={join('/posts', post.slug)}>
                <a>{post.title}</a>
              </Link>
            </div>
          )
        })}
        <div className="flex justify-center space-x-2 font-mono">
          {[...Array(totalCount)].map((_, i) => {
            const now = i + 1
            return now === currentCount ? (
              <div
                key={i}
                className="flex justify-center items-center bg-gray-700 text-gray-300 w-12 h-12 rounded-full"
              >
                {now}
              </div>
            ) : (
              <Link href={join(now.toString())}>
                <a>
                  <div
                    key={i}
                    className="flex justify-center items-center bg-gray-300 hover:bg-gray-700 text-gray-700 hover:text-gray-300 w-12 h-12 rounded-full"
                  >
                    {now}
                  </div>
                </a>
              </Link>
            )
          })}
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const id = Number(context.params?.id)
  const allPosts = getAllPosts()
  const postsCount = Number(process.env.COLUMN_CONUT_PER_PAGE)

  const start = id * postsCount
  const end = start + postsCount

  const posts = await Promise.all(
    allPosts.slice(start, end).map((post) => {
      return readMarkdown(join(MARKDOWN_DIR, post + '.md'))
    })
  )
  posts.forEach((post) => console.log(post.slug))

  return {
    props: {
      totalCount: Math.ceil(allPosts.length / postsCount),
      currentCount: id,
      posts: posts,
    },
  }
}

export default Home
