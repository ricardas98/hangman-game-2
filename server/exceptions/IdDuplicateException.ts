export default class IdDuplicateException extends Error {
  constructor(msg: string = "object already exists in memory") {
    super(msg);
  }
}
