import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

export interface PostContent {
  slug: string
  title: string
  date: string
  author: string
  content: string
}

const readMarkdown = async (filepath: string): Promise<PostContent> => {
  const fileContents = fs.readFileSync(filepath, 'utf-8')
  const { data, content } = matter(fileContents)

  return {
    slug: path.parse(filepath).name,
    title: data['title'] || '',
    date: data['date'] || '',
    author: data['author'] || '',
    content: content,
  }
}

export default readMarkdown
