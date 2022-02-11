export default class IdDuplicateException extends Error {
  constructor(id: string, msg: string = "already exists in memory") {
    super(`Object (id: ${id}) ` + msg);
  }
}
