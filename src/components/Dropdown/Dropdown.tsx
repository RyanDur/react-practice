import * as React from 'react';
import {Component, ReactNode} from 'react';
import './Dropdown.css';

export interface Props<T> {
  options: T[];
  selectionFormat: (option: T) => ReactNode;
  children: ReactNode[];
  defaultSelected?: T;
  selected?: (option: T) => void;
}

interface State<T> {
  selected?: T;
}

export class Dropdown<T> extends Component<Props<T>, State<T>> {
  constructor(props: Props<T>) {
    super(props);
    this.state = {
      selected: undefined
    };
  }

  getOptionsList = (event: React.MouseEvent<HTMLHeadElement>) =>
    event.currentTarget
      .closest('.dropdown')
      .querySelector('.options')
      .classList;

  handleSelection = (option: T) =>
    this.setState({selected: option});

  render() {
    const {children, defaultSelected, options, selectionFormat} = this.props;
    return <section
      className='dropdown'
      onMouseLeave={(event) => this.getOptionsList(event).add('hide')}>
      <h1 className='selected'
          onClick={(event) => this.getOptionsList(event).toggle('hide')}>
        {selectionFormat(this.state.selected || defaultSelected || options[0])}
      </h1>
      <ul className='options hide'>
        {options.map((option: T, index) =>
          <li
            key={index}
            onClick={() => this.handleSelection(option)}
            className='option'>{children[index]}</li>)}
      </ul>
    </section>;
  }
}
