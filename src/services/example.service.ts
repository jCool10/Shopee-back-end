import { ExampleRepo } from '~/repositories/example.repo'

// create class ExampleService with CRUD methods
export class ExampleService {
  exampleRepository: ExampleRepo

  constructor() {
    this.exampleRepository = new ExampleRepo()
  }

  public async getExample() {
    return 'Example Service'
  }
}
