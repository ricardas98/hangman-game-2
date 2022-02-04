export default class DoesNotExistException extends Error {
  constructor(id: string, msg: string = "object does not exist in memory") {
    super(`Object (id: ${id})` + msg);
  }
}
