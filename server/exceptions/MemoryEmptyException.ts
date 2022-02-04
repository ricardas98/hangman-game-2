export default class MemoryEmptyException extends Error {
  constructor(msg: string = "memory is empty") {
    super(msg);
  }
}
