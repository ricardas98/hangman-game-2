export default class BoundaryDeleteSessionInput {
  private sessionId: string;

  constructor(sessionId: string) {
    this.sessionId = sessionId;
  }

  getSessionId(): string {
    return this.sessionId;
  }
}
