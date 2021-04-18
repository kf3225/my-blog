import { GetStaticPaths } from 'next'
import Index, { getStaticProps } from '../index'
import getAllPosts from '../../utils/getAllPosts'

export default Index

export { getStaticProps }

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = getAllPosts()
  const countPerPage = Number(process.env.COLUMN_CONUT_PER_PAGE)
  const pageCount = Math.ceil(allPosts.length / countPerPage)

  const staticPaths = {
    paths: [...Array(pageCount)].map((_, i) => {
      return {
        params: {
          id: (i + 1).toString(),
        },
      }
    }),
    fallback: false,
  }
  return staticPaths
}
