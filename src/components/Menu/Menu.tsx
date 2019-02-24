import * as React from 'react';
import {ChangeEvent, Component} from 'react';
import {direction as Direction} from '../Table/elements/types';
import {ColumnName, MenuProps, MenuState} from './types';
import './Menu.css';

export class Menu extends Component<MenuProps & ColumnName> {

  state: MenuState = {
    addColumns: [],
    removeColumns: []
  };

  reset = () => this.setState({addColumns: []});
  add = (direction: Direction) =>
    this.props.add(direction, this.props.column, this.state.addColumns);

  handleAddRight = () => {
    this.add(Direction.Right);
    this.reset();
  };

  handleAddLeft = () => {
    this.add(Direction.Left);
    this.reset();
  };

  handleRemove = () => {
    this.props.remove(this.state.removeColumns);
    this.setState({removeColumns: []});
  };

  handleAddChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.nextElementSibling.textContent;
    if (event.target.checked) {
      this.setState({addColumns: this.state.addColumns.concat(value)});
    } else {
      this.setState({
        addColumns: this.state.addColumns
          .filter(name => name !== value)
      });
    }
  };

  handleRemoveChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.nextElementSibling.textContent;
    if (event.target.checked) {
      this.setState({removeColumns: this.state.removeColumns.concat(value)});
    } else {
      this.setState({
        removeColumns: this.state.removeColumns
          .filter(name => name !== value)
      });
    }
  };

  render() {
    const {inactive, active} = this.props.columns;
    return <div className='menu'>
      <ul className='add-columns'>
        {inactive.map(
          (name: string, index: number) =>
            <li key={index}>
              <input
                type='checkbox'
                id={`${this.props.column}-${name}`}
                data-column={name}
                onChange={this.handleAddChange}
                defaultChecked={false}/>
              <label htmlFor={`${this.props.column}-${name}`}>{name}</label>
            </li>)}
      </ul>
      <button
        className='add-left'
        disabled={this.state.addColumns.length === 0}
        onClick={this.handleAddLeft}>
        Add Left
      </button>
      <button
        className='add-right'
        disabled={this.state.addColumns.length === 0}
        onClick={this.handleAddRight}>
        Add Right
      </button>
      <ul className='remove-columns'>
        {active.filter((column: string) => this.props.column !== column).map(
          (name: string, index: number) =>
            <li key={index}>
              <input
                type='checkbox'
                id={`${this.props.column}-${name}`}
                data-column={name}
                onChange={this.handleRemoveChange}
                defaultChecked={false}/>
              <label htmlFor={`${this.props.column}-${name}`}>{name}</label>
            </li>)}
      </ul>
      <button
        className='remove'
        disabled={this.state.removeColumns.length === 0}
        onClick={this.handleRemove}>
        Remove
      </button>
    </div>;
  }
}
