import {ValidationError} from 'io-ts';
import {failure} from 'io-ts/lib/PathReporter';
import {Response, ValidateResponse} from './types/Response';

export const clientConnector = (socket: WebSocket) => (fn: (data: Response) => void) => {
  socket.onmessage = (data) => fn(ValidateResponse.decode(JSON.parse(data.data))
    .getOrElseL((errors: ValidationError[]) => {
      throw new Error(failure(errors).join('\n'));
    }) as Response);
};
