import StringGenerator from "./StringGenerator";

export default class IdGenerator implements StringGenerator {
  generate(seed: number): string {
    return String(
      seed.toString() + "x" + Math.floor(Math.random() * 1000000).toString()
    );
  }
}
