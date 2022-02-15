import { Client } from "../api/Client";
import { RestSessionGateway } from "./RestSessionGateway";
import { MockProxy, mock } from "jest-mock-extended";
import { Session } from "../../domain/Session";
import { SessionGateway } from "../api/SessionGateway";
import { of } from "rxjs";

describe("REST session gateway", () => {
  let client: MockProxy<Client>;
  let gateway: SessionGateway;

  beforeEach(() => {
    mockClient();
    initGateway();
  });

  it("Create game", done => {
    const session = new Session("123", 0, [], [], []);
    client.post.mockReturnValue(of(session));
    const observable = gateway.create();

    observable.subscribe(res => {
      expect(res).toEqual(session);
      done();
    });
  });

  function mockClient() {
    client = mock<Client>();
  }

  function initGateway() {
    gateway = new RestSessionGateway(client);
  }
});
