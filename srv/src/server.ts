import fastify from 'fastify'
import routes from './routes/routes'

const server = fastify()

server.register(routes)

const port = 3000

server.listen({ host: '0.0.0.0', port }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening on ${address}`)
})
