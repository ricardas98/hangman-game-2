export default class BoundaryUpdateSessionInput {
  private readonly sessionId: string;
  private readonly guess: string;

  constructor(sessionId: string, guess: string) {
    this.sessionId = sessionId;
    this.guess = guess;
  }

  getSessionId(): string {
    return this.sessionId;
  }

  getGuess(): string {
    return this.guess;
  }
}
