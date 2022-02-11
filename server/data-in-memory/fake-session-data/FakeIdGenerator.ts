import StringGenerator from "../session-data/StringGenerator";

export default class FakeIdGenerator implements StringGenerator {
  generate(seed: number): string {
    return String("123456");
  }
}
