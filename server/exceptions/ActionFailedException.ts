import { ActionType } from "./ActionTypes";

export default class ActionFailedException extends Error {
  private id: string;
  private actionType: ActionType;

  constructor(
    actionType: ActionType,
    id: string = "",
    msg: string = "object action failed"
  ) {
    super(msg);
    this.id = id;
    this.actionType = actionType;
  }
}
