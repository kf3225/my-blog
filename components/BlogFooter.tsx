import { FC } from 'react'

interface Props {
  year: string
}

const BlogFooter: FC<Props> = (props: Props) => {
  return (
    <>
      <footer className="bg-gray-200">
        <p className="p-8 text-center text-xs">
          Copyright © {props.year} FKeisuke, inc. All Rights Reserved.
        </p>
      </footer>
    </>
  )
}

export default BlogFooter
