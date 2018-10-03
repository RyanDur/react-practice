import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

export function Checkbox({index, label, checked, change}) {

  return <Fragment>
    <input
      id={`row-check-${index}`}
      type="checkbox"
      defaultChecked={checked}
      className={'row-check'}
      onChange={change}
    />
    <label
      className={'row-label'}
      htmlFor={`row-check-${index}`}>
      {label}
    </label>
  </Fragment>;
}

Checkbox.propTypes = {
  index: PropTypes.number,
  label: PropTypes.string,
  checked: PropTypes.bool,
  change: PropTypes.func
};