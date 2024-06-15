import * as dotenv from 'dotenv'
dotenv.config()

export const configs = {
  app: {
    port: process.env.PORT || 4090,
    env: process.env.NODE_ENV,
    timeShutdown: process.env.TIME_SHUTDOWN || process.env.NODE_ENV === 'production' ? 15000 : 3000
  }
}
