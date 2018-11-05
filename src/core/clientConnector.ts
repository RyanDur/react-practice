import {Data} from "../components/Table/TableState";
import {webSocket} from "rxjs/webSocket";

export const clientConnector = (url: string, fn: (data: Data) => void) => {
  webSocket(url).subscribe(
    data => fn(data),
    (err: any) => console.log(err),
    () => console.log('complete')
  );
};