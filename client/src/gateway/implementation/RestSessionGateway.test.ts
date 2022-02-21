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

  it("creates session", done => {
    const session = new Session("123", 0, [], [], []);
    client.post.mockReturnValue(of(session));

    gateway.create().subscribe(res => {
      expect(res).toEqual(session);
      done();
    });
  });

  it("updates with new guess game", done => {
    const session = new Session("123", 0, ["a"], ["x"], [[0, "a"]]);
    client.put.mockReturnValue(of(session));

    gateway.update("123", "a").subscribe(res => {
      expect(res).toEqual(session);
      done();
    });
  });

  it("deletes session", done => {
    const responseData: number = 204;
    client.delete.mockReturnValue(of(responseData));

    gateway.delete("123").subscribe(res => {
      expect(res).toBeTruthy();
      expect(client.delete).toBeCalled();
      done();
    });
  });

  it("fails to delete session", done => {
    const statusCode = 500;
    client.delete.mockReturnValue(of(statusCode));

    gateway.delete("123").subscribe(res => {
      expect(res).toBeFalsy();
      expect(client.delete).toBeCalled();
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
