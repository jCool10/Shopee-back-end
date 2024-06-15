import { ExampleController } from '~/controllers/example.controller'
import { Router } from 'express'

export default function exampleRoute(router: Router) {
  const exampleController = new ExampleController()

  router.get('/example', exampleController.getExample)
}
