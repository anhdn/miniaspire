const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

const APP_ROUTES = [ {
  page: 'register',
  pattern: '/'
}, {
  page: 'success',
  pattern: '/success'
}, {
  page: 'repaid',
  pattern: '/repaid'
}]

APP_ROUTES.forEach(route => routes.add(route))
