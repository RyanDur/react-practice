import * as React from 'react';
import {Component, ErrorInfo} from 'react';
import {SelectedHeader} from '../types';

interface SelectableHeaderProps {
  value: SelectedHeader;
  handleSelect: (selection: string) => void;
  id: string;
  defaultSelected?: boolean;
  classes?: string[];
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

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log(error.message);
  }

  render() {
    const {value, classes, id} = this.props;
    return (<>
        <input type='checkbox'
               id={`${value.name}-checkbox-${id}`}
               checked={value.selected}
               value={value.name}
               onChange={this.getOnChange}/>
        <label htmlFor={`${value.name}-checkbox-${id}`}
               className={classes.join(' ')}>{value.name}</label>
      </>
    );
  }
}
