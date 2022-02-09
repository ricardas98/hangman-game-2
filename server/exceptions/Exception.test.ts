import ActionFailedException from "./ActionFailedException";
import { ActionType } from "./ActionTypes";
import DoesNotExistException from "./DoesNotExistException";
import IdDuplicateException from "./IdDuplicateException";

describe("Exception tests", () => {
  it("creates action failed exception", () => {
    const res = new ActionFailedException("1", ActionType.Delete);

    expect(res.message).toBe("Object (id: 1) action failed (action type: 1)");
  });

  it("creates does not exist exception", () => {
    const res = new DoesNotExistException("1");

    expect(res.message).toBe("Object (id: 1) object does not exist in memory");
  });

  it("creates does id duplicate  exception", () => {
    const res = new IdDuplicateException("1");

    expect(res.message).toBe("Object (id: 1) already exists in memory");
  });
});
