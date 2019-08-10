
const path = require('path')
const express = require('express')
const compression = require('compression')
const next = require('next')
const helmet = require('helmet')

const routes = require('../routes')

const port = parseInt(process.env.PORT, 10) || 8080
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
  const server = express()

  server.use(helmet())
  server.use(compression())

  const staticPath = path.join(__dirname, '../static')
  server.use('/static', express.static(staticPath, {
    maxAge: '30d',
    immutable: true
  }))

  const options = {
    root: staticPath,
    headers: {
      'Content-Type': 'text/plain;charset=UTF-8'
    }
  }
  server.get('/robots.txt', (req, res) => (
    res.status(200).sendFile('robots.txt', options)
  ))

  server.get('*', (req, res) => {
    return handler(req, res)
  })

  startServer()

  function startServer () {
    server.listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`)
    })
  }
})
