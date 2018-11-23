import * as React from 'react';
import {ChangeEvent, Component} from 'react';
import {ColumnName, Direction, MenuProps, MenuState} from "./types";

export class Menu extends Component<MenuProps & ColumnName> {

  state: MenuState = {
    columns: []
  };

  reset = () => this.setState({columns: []});
  add = (direction: Direction) =>
    this.props.add(direction, this.props.column, this.state.columns);

  handleAddRight = () => {
    this.add(Direction.Right);
    this.reset();
  };

  handleAddLeft = () => {
    this.add(Direction.Left);
    this.reset();
  };

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.nextElementSibling.textContent;
    if (event.target.checked) {
      this.setState({columns: this.state.columns.concat(value)});
    } else {
      this.setState({
        columns: this.state.columns
          .filter(name => name !== value)
      });
    }
  };

  componentDidUpdate(prevProps: MenuProps) {
    if (prevProps.columns.active.toString() !== this.props.columns.active.toString()) {
      console.log(this.props);
    }
  }

  render() {
    const {inactive} = this.props.columns;
    return <div className="menu">
      <ul className="add-columns">
        {inactive.map(
          (name: string, index: number) =>
            <li key={index}>
              <input
                type="checkbox"
                id={`${this.props.column}-${name}`}
                data-column={name}
                onChange={this.handleChange}
                defaultChecked={false}/>
              <label htmlFor={`${this.props.column}-${name}`}>{name}</label>
            </li>)}
      </ul>
      <button
        className="add-left"
        disabled={this.state.columns.length === 0}
        onClick={this.handleAddLeft}>
        Add Left
      </button>
      <button
        className="add-right"
        disabled={this.state.columns.length === 0}
        onClick={this.handleAddRight}>
        Add Right
      </button>
    </div>;
  }
}