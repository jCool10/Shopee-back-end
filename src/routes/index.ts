'use strict'

import { Application, Router } from 'express'
import exampleRoute from './example.route'

export const routes = (app: Application, router: Router) => {
  app.use('/api/v1', router)

  exampleRoute(router)
}
