import {Component} from 'react';
import * as React from 'react';
import {Selected} from '../types';

interface SelectableHeaderProps {
  value: Selected;
  handleSelect: (selection: string) => void;
  defaultSelected?: boolean;
}

export class SelectableHeader extends Component<SelectableHeaderProps> {
  componentDidMount(): void {
    if (this.props.defaultSelected) {
      this.props.handleSelect(this.props.value.name);
    }
  }

  getOnChange = () => {
    this.props.handleSelect(this.props.value.name);
  };

  render() {
    const {value} = this.props;
    return (<td>
      <input type='checkbox'
             id={`${value.name}-checkbox`}
             checked={value.selected}
             value={value.name}
             onChange={this.getOnChange} />
      <label htmlFor={`${value.name}-checkbox`}
             className='row-header'>{value.name}</label>
    </td>);
  }
}
