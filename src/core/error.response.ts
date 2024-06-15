import { ReasonPhrases, StatusCodes } from 'http-status-codes'

declare class Error {
  public name: string
  public message: string
  public stack: string
  public status: number
  public isOperational: boolean
  public errors: any
  constructor(message: string)
}

class BaseError extends Error {
  constructor(message: string, status: number, errors: any, isOperational: boolean) {
    super(message)
    this.name = this.constructor.name
    this.status = status
    this.isOperational = isOperational

    Object.setPrototypeOf(this, BaseError.prototype)
  }
}

class NotFoundError extends BaseError {
  constructor(
    message: string = ReasonPhrases.NOT_FOUND,
    errors = [],
    status = StatusCodes.NOT_FOUND,
    isOperational = true
  ) {
    super(message, status, errors, isOperational)
  }
}

export { BaseError, NotFoundError }
