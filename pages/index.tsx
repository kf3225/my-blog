import { NextPage } from 'next'
import BlogHeader from '../components/BlogHeader'

const Home: NextPage = () => {
  return (
    <>
      <BlogHeader
        title="My Blog"
        description="４年目エンジニアが調べたことなどを書きなぐるブログ"
        keyword="My Blog"
      />
    </>
  )
}

export default Home
