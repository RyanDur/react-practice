import {ValidationError} from 'io-ts';
import {failure} from 'io-ts/lib/PathReporter';
import {DataResponse, ValidateDataResponse} from './types';

export const clientConnector = (socket: WebSocket) => (fn: (data: DataResponse) => void) =>
  socket.onmessage = ({data}) => fn(
    ValidateDataResponse.decode(JSON.parse(data))
    .getOrElseL((errors: ValidationError[]) => {
      throw new Error(failure(errors).join('\n'));
    })
  );
