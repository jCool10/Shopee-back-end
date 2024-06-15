'use strict'

import morgan from 'morgan'
import compression from 'compression'
import helmet from 'helmet'
import cors from 'cors'
import express, { Application } from 'express'

export default (app: Application) => {
  app.use(morgan('dev'))
  app.use(
    compression({
      level: 6,
      threshold: 100 * 1024,
      filter: (req) => {
        return !req.headers['x-no-compress']
      }
    })
  )
  app.use(helmet())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  const whiteList = ['']
  app.use(
    cors({
      origin: whiteList,
      credentials: true
    })
  )
}
