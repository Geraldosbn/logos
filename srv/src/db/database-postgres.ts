import { randomUUID } from 'crypto'

import { Post } from './interfaces.js'
import { sql } from './db.js'

export class DatabasePostgres {
  async list(search?: string) {
    const videos = `select * from post`

    console.log('allVideos', videos)
    return videos
  }

  async create(post: Post) {
    const videoId = randomUUID()
    const { title, description, author } = post
    await sql`insert into post (id, title, description, duration) VALUES (${videoId}, ${title}, ${description},${author})`
    console.log('createVideo')
  }

  async update(id: string, post: Post) {
    const { title, description, author } = post
    await sql`update post set title= ${title}, description =${description}, duration=${author} where id= ${id}`
    console.log('editVideo')
  }

  async delete(id: string) {
    await sql`delete from videos where id =${id}`
    console.log('deleteVideo')
  }
}
