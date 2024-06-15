import { NextFunction, Request, Response } from 'express'
import { NotFoundError, BaseError } from '../core/error.response'

const handleError = (error: BaseError, req: Request, res: Response, next: NextFunction) => {
  const statusCode = error.status || 500
  return res.status(statusCode).json({
    status: statusCode,
    stack: error.stack,
    message: error.message || 'Internal Server Error'
  })
}

const notFoundError = (req: Request, res: Response, next: NextFunction) => {
  const error = new NotFoundError('Not Found')
  next(error)
}

export { notFoundError, handleError }
