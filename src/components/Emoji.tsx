import {symbol} from 'prop-types';

const Emoji = props => (
  <span
    className="emoji"
role="img"
aria-label={props.label ? props.label : ""}
aria-hidden={props.label ? "false" : "true"}
  >
  {props.symbol}
  </span>
);
