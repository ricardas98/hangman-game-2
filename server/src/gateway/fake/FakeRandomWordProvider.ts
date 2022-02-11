import RandomStringFromListProvider from "../implementation/helper/RandomStringFromListProvider";

export default class FakeRandomWordProvider
  implements RandomStringFromListProvider
{
  getRandom(words: string[]): string {
    return "parrot";
  }
}
