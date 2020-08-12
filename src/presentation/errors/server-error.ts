export class ServerError extends Error {
  constructor () {
    super('An unexpected error ocurred! Please, try again later.')
    this.name = 'ServerError'
  }
}
