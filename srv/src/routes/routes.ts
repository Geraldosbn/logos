import fastify, { FastifyInstance } from 'fastify'
import apiController from '../controller/apiController'

const server = fastify()
const controller = apiController()

const routes = async (fastify: FastifyInstance) => {
  server.post('/videos', controller.createVideo)

  server.get('/videos', controller.getVideos)

  server.put('/videos/:id', controller.editVideo)

  server.delete('/videos/:id', controller.deleteVideo)
}

export default routes
