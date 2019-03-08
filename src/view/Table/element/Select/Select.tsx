import * as React from 'react';
import {ChangeEvent, Component, ErrorInfo} from 'react';
import {SelectedHeader} from '../types';

interface SelectableHeaderProps {
  value: SelectedHeader;
  handleSelect: (selection: string, selected: boolean) => void;
  id: string;
  defaultSelected?: boolean;
  classes?: string[];
}

export class Select extends Component<SelectableHeaderProps> {
  componentDidMount(): void {
    if (this.props.value.selected === undefined) {
      this.props.handleSelect(this.props.value.name, !!this.props.defaultSelected);
    }
  }

  getOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.props.handleSelect(this.props.value.name, event.currentTarget.checked);
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
