export default class BoundaryDeleteSession {
  private sessionId: string;

  constructor(sessionId: string) {
    this.sessionId = sessionId;
  }

  getSessionId(): string {
    return this.sessionId;
  }
}
