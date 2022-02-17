import { Client } from "../api/Client";
import { RestSessionGateway } from "./RestSessionGateway";
import { MockProxy, mock } from "jest-mock-extended";
import { Session } from "../../domain/Session";
import { SessionGateway } from "../api/SessionGateway";
import { Observable, of } from "rxjs";

describe("REST session gateway", () => {
  let client: MockProxy<Client>;
  let gateway: SessionGateway;

  beforeEach(() => {
    mockClient();
    initGateway();
  });

  it("create session", done => {
    const session = new Session("123", 0, [], [], []);
    client.post.mockReturnValue(of(session));

    gateway.create().subscribe(res => {
      expect(res).toEqual(session);
      done();
    });
  });

  it("update with new guess game", done => {
    const session = new Session("123", 0, ["a"], ["x"], [[0, "a"]]);
    client.put.mockReturnValue(of(session));

    gateway.update("123", "a").subscribe(res => {
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
