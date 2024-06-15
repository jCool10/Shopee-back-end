import { SuccessResponse } from '~/core/success.response'
import { ExampleService } from '~/services/example.service'
import { Request, Response } from 'express'

export class ExampleController {
  exampleService: ExampleService

  constructor() {
    this.exampleService = new ExampleService()
  }

  public getExample = async (req: Request, res: Response) => {
    new SuccessResponse({
      message: 'Get Example Success',
      data: await this.exampleService.getExample()
    }).send(res)
  }
}
