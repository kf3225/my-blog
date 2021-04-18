import fs from 'fs'
import { join, parse } from 'path'

const MARKDOWN_DIR = join(process.cwd(), 'posts')
const getAllPosts = (): string[] =>
  fs
    .readdirSync(MARKDOWN_DIR)
    .filter((file) => /.*\.md$/.test(file))
    .map((file) => join('/posts', parse(file).name))

export default getAllPosts
