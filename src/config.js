export default {
  env: process.env.NODE_ENV,
  mode: process.env.MODE,
  githubApiEndpoint: process.env.GITHUB_API_ENDPOINT,
  HOST: process.env.HOST || 'http://localhost:8080',
  API: 'https://weaspire.sg/'

}
