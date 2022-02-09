import { ActionType } from "./ActionTypes";

export default class ActionFailedException extends Error {
  constructor(
    id: string,
    actionType: ActionType,
    msg: string = "action failed"
  ) {
    super(`Object (id: ${id}) ` + msg + ` (action type: ${actionType})`);
  }
}
