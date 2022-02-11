import StringGenerator from "../implementation/helper/StringGenerator";

export default class FakeIdGenerator implements StringGenerator {
  generate(seed: number): string {
    return String("123456");
  }
}
