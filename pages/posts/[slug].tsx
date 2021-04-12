import fs from 'fs'
import { join, parse } from 'path'
import {
  GetStaticPaths,
  GetStaticProps,
  NextPage,
  InferGetStaticPropsType,
} from 'next'
import { ParsedUrlQuery } from 'querystring'
import readMarkdown, { PostContent } from '../../utils/readMarkDown'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import Layout from '../../components/Layout'

const MARKDOWN_DIR = join(process.cwd(), 'posts')
const getAllPosts = (): string[] =>
  fs
    .readdirSync(MARKDOWN_DIR)
    .filter((file) => /.*\.md$/.test(file))
    .map((file) => join('/posts', parse(file).name))

export const getStaticPaths: GetStaticPaths = async () => {
  const staticPaths = {
    paths: getAllPosts().map((post) => {
      return {
        params: {
          slug: parse(post).name,
        },
      }
    }),
    fallback: false,
  }
  return staticPaths
}

interface Params extends ParsedUrlQuery {
  slug: string
}

type PostProps = {
  post: NonNullable<PostContent>
}

export const getStaticProps: GetStaticProps<PostProps, Params> = async (
  context
) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const params = context.params!
  const filepath =
    getAllPosts()
      .map((post) => join(MARKDOWN_DIR, `${parse(post).name}.md`))
      .find((post) => params.slug === parse(post).name) || ''

  const postContent = await readMarkdown(filepath)
  return {
    props: {
      post: postContent,
    },
  }
}

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Posts: NextPage<Props> = ({ post }) => {
  return (
    <>
      <Layout>
        <>
          <div className="flex flex-col pb-10 text-gray-800">
            <div className="pb-6 font-bold text-4xl">{post.title}</div>
            <div className="leading-8">
              <div>{`Author ${post.author}`}</div>
              <div>{`Date ${post.date}`}</div>
            </div>
          </div>
          <ReactMarkdown plugins={[gfm]} source={post.content} />
        </>
      </Layout>
    </>
  )
}

export default Posts
