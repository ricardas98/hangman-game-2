import RandomStringFromListProvider from "../../api/helper/RandomStringFromListProvider";

export default class RandomWordProvider
  implements RandomStringFromListProvider
{
  getRandom(words: string[]): string {
    const index = this.getRandomIndexBetweenZeroAndMax(words.length);
    return words[index];
  }

  private getRandomIndexBetweenZeroAndMax(max: number): number {
    return Math.floor(Math.random() * max);
  }
}
