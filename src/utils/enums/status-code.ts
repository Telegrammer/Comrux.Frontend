import { type ObjectValues } from './object-values'

export const HTTP_STATUS_CODE = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
} as const


export const HTTP_GENERIC_STATUS_CODE = {
  OK: 2,
  CLIENT_ERROR: 4,
  SERVER_ERROR: 5
} as const

export type HTTP_STATUS_CODE = ObjectValues<typeof HTTP_STATUS_CODE>
export type HTTP_GENERIC_STATUS_CODE = ObjectValues<typeof HTTP_STATUS_CODE>