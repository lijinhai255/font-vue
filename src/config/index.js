const isDev = process.env.NODE_ENV === 'development'

export default {
  baseUrl: {
    dev: 'http://localhost:3000/api/',
    pro: 'http://42.193.104.12:3000/api/',
  },
  publicPath: [/^\/public/, /^\/login/, ],
  wsconfig: {
    url: isDev ? '127.0.0.1' : 'api.dev.toimc.com',
    port: isDev ? '3001' : 22001,
  },
}
