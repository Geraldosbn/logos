import { FastifyReply, FastifyRequest } from 'fastify'
import { DatabasePostgres } from '../db/database-postgres'
import { Post } from '../db/interfaces'

const database = new DatabasePostgres()

const apiController = () => {
  const createVideo = async (request: FastifyRequest, reply: FastifyReply) => {
    const { title, description, author } = request.body as Post
    await database.create({
      title,
      description,
      author
    })
    return reply.status(201).send()
  }
  const getVideos = async (request: FastifyRequest, reply: FastifyReply) => {
    const search = (request.query as { search: string | undefined }).search
    const videos = await database.list(search)
    return reply.send(videos)
  }
  const editVideo = async (request: FastifyRequest, reply: FastifyReply) => {
    const videoId = (request.params as { id: string }).id
    const { title, description, author } = request.body as Post

    await database.update(videoId, {
      title,
      description,
      author
    })
    const videos = database.list()
    return reply.status(204).send(videos)
  }
  const deleteVideo = async (request: FastifyRequest, reply: FastifyReply) => {
    const videoId = (request.params as { id: string }).id
    await database.delete(videoId)
    return reply.status(204).send()
  }

  return { createVideo, getVideos, editVideo, deleteVideo }
}

export default apiController
