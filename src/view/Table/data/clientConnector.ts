import {ValidationError} from 'io-ts';
import {failure} from 'io-ts/lib/PathReporter';
import {DataResponse, ValidateResponse} from './types/DataResponse';

export const clientConnector = (socket: WebSocket) => (fn: (data: DataResponse) => void) =>
  socket.onmessage = ({data}) => fn(ValidateResponse.decode(JSON.parse(data))
    .getOrElseL((errors: ValidationError[]) => {
      throw new Error(failure(errors).join('\n'));
    }) as DataResponse);
