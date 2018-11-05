import * as React from 'react';
import {Fragment} from 'react';

interface CheckboxProps {
  index: number
  label: string
  checked: boolean
  change: () => void
}

export const Checkbox = ({index, label, checked, change}: CheckboxProps): JSX.Element =>
  <Fragment>
    <input
      id={`row-check-${index}`}
      type="checkbox"
      defaultChecked={checked}
      className={'row-check'}
      value={'checked'}
      onChange={change}
    />
    <label
      className={'row-label'}
      htmlFor={`row-check-${index}`}>
      {label}
    </label>
  </Fragment>;