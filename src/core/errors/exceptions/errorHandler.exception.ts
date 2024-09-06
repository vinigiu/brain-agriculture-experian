import { httpError } from '../../constants';

export class ErrorHandlerException extends Error {
  private _status: number;
  private _messageTreated: string;
  private _timestamp: string;
  protected _data: unknown;
  private _id: string;
  private _prefix: string;

  protected constructor(message: string, prefix: string, data?: unknown) {
    super(message);

    this._messageTreated = httpError[message].message || 'Internal server error.';
    this._status = httpError[message].statusCode || 500;
    this._timestamp = new Date().toISOString();
    this._data = data;
    this._id = httpError[message].id;
    this._prefix = prefix;
  }

  get id() {
    return `${this._prefix}-${this._id}`;
  }

  get status() {
    return this._status;
  }

  get messageTreated() {
    return this._messageTreated;
  }

  get timestamp() {
    return this._timestamp;
  }

  get data() {
    return this._data;
  }
}
