import * as React from 'react';
import {Component, ReactNode} from 'react';

interface SelectableRowProps {
  selection: string;
  selected: boolean;
  handleSelect: (selection: string) => void;
  defaultSelected?: boolean;
  children?: ReactNode | ReactNode[];
}

export class SelectableRow extends Component<SelectableRowProps> {
  componentDidMount(): void {
    if (this.props.defaultSelected) {
      this.props.handleSelect(this.props.selection);
    }
  }

  getOnChange = () => {
    this.props.handleSelect(this.props.selection);
  };

  render() {
    const {children, selection, selected} = this.props;
    return (<tr>
      <td>
        <input type='checkbox'
               id={`${selection}-checkbox`}
               checked={selected}
               value={selection}
               onChange={this.getOnChange} />
        <label htmlFor={`${selection}-checkbox`}
               className='row-header'>{selection}</label>
      </td>
      {children}
    </tr>);
  }
}
