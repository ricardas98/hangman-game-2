export default class DoesNotExistException extends Error {
  constructor(msg: string = "object does not exist in memory") {
    super(msg);
  }
}
