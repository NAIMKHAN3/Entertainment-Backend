import {
    ErrorRequestHandler,
    NextFunction,
    Request,
    RequestHandler,
    Response,
  } from 'express'
  import createError from 'http-errors'
  import { ValidationError } from 'express-validation'
import config from '../config'
import { PrismaClientValidationError } from '@prisma/client/runtime/library'
import {Prisma} from '@prisma/client'
import handleValidationError from './handleValidationError'
import handleClientError from './handlePrismaClientError'
  
  export const notfoundandler: RequestHandler = (req, res, next) => {
    next(createError.NotFound())
  }
  
  const errorHandler: ErrorRequestHandler = async (
    err,
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    let statusCode: number = 400
  
    let message: string = err.message
    let errorMessage 
    if (err instanceof ValidationError) {
      statusCode = err.statusCode
      message = err.message
      errorMessage = err?.details
  
    } else if (err instanceof PrismaClientValidationError) {
      const error = handleValidationError(err)
      statusCode = error.statusCode
      message = error.message
      errorMessage = error.errorMessages
    } else if (err instanceof Prisma.PrismaClientKnownRequestError) {
        const error = handleClientError(err)
      statusCode = error.statusCode,
        message = error.message,
        (errorMessage = [
          {
            path: "",
            message: error.errorMessages,
          },
        ])
    }
    res.status(statusCode).json({
      success: false,
      message,
      errorMessage,
      stack: config.env !== 'production' ? err?.stack : undefined,
    })
  }
  
  export default errorHandler
  