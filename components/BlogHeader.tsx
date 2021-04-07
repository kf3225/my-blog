import { FC } from 'react'
import Head from 'next/head'
import Link from 'next/link'

interface Props {
  title: string
  description: string
  keyword: string
}

const BlogHeader: FC<Props> = (props: Props) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta name="keywords" content={props.keyword} />
        <meta property="og:type" content="blog" />
        {/* <meta property="og:url" content={url} /> */}
        {/* <meta property="og:image" content={image} /> */}
        <meta property="og:site_name" content={props.title} />
        {/* <link rel="canonical" href={url} /> */}
        {/* <link rel="shortcut icon" href={'https://t-cr.jp/favicon.ico'} /> */}
        {/* <link rel="apple-touch-icon" href={'https://t-cr.jp/logo.png'} /> */}
      </Head>
      <div className="p-4">
        <Link href="/">
          <a className="font-mono text-3xl">{props.title}</a>
        </Link>
      </div>
      <div className="p-4">
        <p className="text-mono">{props.description}</p>
      </div>
    </>
  )
}

export default BlogHeader
