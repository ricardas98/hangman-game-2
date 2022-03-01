export default interface RandomStringFromListProvider {
  getRandom(words: string[]): string;
}
