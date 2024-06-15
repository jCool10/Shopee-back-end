'use strict'

import express from 'express'
import mongoose from 'mongoose'
import expressConfig from './configs/express.config'
import { createServer } from 'http'
import serverConfig from './configs/server.config'
import { routes } from './routes'
import { handleError, notFoundError } from './middleware/errorHandle.middleware'

const app = express()
const apiRouter = express.Router()
const server = createServer(app)

expressConfig(app)

serverConfig(app, mongoose, server).startServer()

// Init routes
routes(app, apiRouter)

app.use(notFoundError)

app.use(handleError)

export default app
