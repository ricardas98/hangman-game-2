export default class BoundaryUpdateSessionInput {
  private sessionId: string;
  private guess: string;

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
