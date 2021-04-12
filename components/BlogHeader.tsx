import { FC } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
  title: string
  description: string
  keyword: string
  twitterLink: string
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
        <meta property="og:site_name" content={props.title} />
      </Head>
      <div className="flex justify-center pt-8 text-gray-800">
        <div className="">
          <Image src="/my_blog_icon.png" height={144} width={144} />
        </div>
        <div className="m-8 leading-10">
          <Link href="/">
            <a className="font-mono font-black text-5xl">{props.title}</a>
          </Link>
          <p className="font-mono text-center">
            {`written by `}
            <Link href={props.twitterLink}>
              <a className="font-mono font-black underline">
                {props.description}
              </a>
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default BlogHeader
