import { NextPage } from 'next'
import BlogHeader from '../components/BlogHeader'
import BlogFooter from '../components/BlogFooter'

const START_YEAR = 2017

const Home: NextPage = () => {
  const year = new Date().getFullYear()

  const blogIntro = `${
    year - START_YEAR
  }年目エンジニアが調べたことなどを書きなぐるブログ`
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <BlogHeader title="My Blog" description={blogIntro} keyword="My Blog" />
        <div className="flex-grow p-8 text-2xl">Contents</div>
        <BlogFooter year={year.toString()} />
      </div>
    </>
  )
}

export default Home
