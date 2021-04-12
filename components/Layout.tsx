import BlogHeader from '../components/BlogHeader'
import BlogFooter from '../components/BlogFooter'
import { NextPage } from 'next'
import 'github-markdown-css'

const TWITTER = 'https://twitter.com/fkeisuke2'

interface LayoutProps {
  children?: React.ReactNode
}

const Layout: NextPage = (props: LayoutProps) => {
  const year = new Date().getFullYear()
  return (
    <div className="min-h-screen flex flex-col container mx-auto">
      <BlogHeader
        title="My Blog"
        description="FKeisuke"
        keyword="My Blog"
        twitterLink={TWITTER}
      />
      <div className="flex-grow p-8 text-2xl">
        {props ? (
          <main className="markdown-body col-span-5">{props.children}</main>
        ) : (
          <div></div>
        )}
      </div>

      <BlogFooter year={year.toString()} />
    </div>
  )
}

export default Layout
