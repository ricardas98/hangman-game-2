import { Client } from "../api/Client";
import RESTSessionGateway from "./RESTSessionGateway";
import { MockProxy, mock } from "jest-mock-extended";
import Session from "../../controller/model/Session";
import { SessionGateway } from "../api/SessionGateway";
import { of } from "rxjs";

describe("REST session gateway", () => {
  let client: MockProxy<Client>;
  let gateway: SessionGateway;

  function mockClient() {
    client = mock<Client>();
  }

  function createGateway() {
    gateway = new RESTSessionGateway(client);
  }

  beforeEach(() => {
    mockClient();
    createGateway();
  });

  it("Create game", () => {
    const session = new Session("123", 0, [], [], []);
    client.post.mockReturnValue(of(session));
    const observable = gateway.create();

    observable.subscribe((res) => expect(res).toEqual(session));
  });
});
