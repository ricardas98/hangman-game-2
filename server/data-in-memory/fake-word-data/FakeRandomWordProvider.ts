import RandomStringFromListProvider from "../word-data/RandomStringFromListProvider";

export default class FakeRandomWordProvider
  implements RandomStringFromListProvider
{
  getRandom(words: string[]): string {
    return "parrot";
  }
}
