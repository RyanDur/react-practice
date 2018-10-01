import React from 'react';
import PropTypes from 'prop-types';
import './ColumnHeader.css';

export function ColumnHeader(props) {
  return (<div className={'column-header'}>{props.children}</div>);
}

ColumnHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};