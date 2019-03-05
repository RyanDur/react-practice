import * as React from 'react';
import {Component, MouseEvent, ReactNode} from 'react';
import './DropDown.css';

export class DropDown extends Component<{ children?: ReactNode }> {

  state = {
    height: 0
  };

  handleClick = (event: MouseEvent<HTMLDivElement>) => {
    event.currentTarget.classList.toggle('change');
    event.currentTarget.closest('.column-header')
      .classList.toggle('top');
    const element = event.currentTarget.closest('.drop-down')
      .querySelector('.container');
    if (this.state.height > 0) {
      this.setState({height: 0});
    } else {
      this.setState({height: element.children.item(0).clientHeight});
    }
  };

  handleBlur = (event: MouseEvent<HTMLDivElement>) => {
    event.currentTarget
      .closest('.column-header')
      .classList
      .remove('top');
    event.currentTarget.closest('.drop-down')
      .querySelector('.hamburger')
      .classList.remove('change');
    this.setState({height: 0});
  };

  render() {
    return <div className='drop-down'>
      <div
        className='hamburger'
        onClick={this.handleClick}>
        <div className='bar1'/>
        <div className='bar2'/>
        <div className='bar3'/>
      </div>
      <div
        className='container'
        style={{height: this.state.height,}}
        onMouseLeave={this.handleBlur}>
        {this.props.children}
      </div>
    </div>;
  }
}
