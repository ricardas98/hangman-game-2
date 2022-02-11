import RandomStringFromListProvider from "../api/helper/RandomStringFromListProvider";

export default class FakeRandomWordProvider
  implements RandomStringFromListProvider
{
  getRandom(words: string[]): string {
    return "parrot";
  }
}
