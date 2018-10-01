import React from 'react';
import './Table.css';
import PropTypes from 'prop-types';

export function Table(props) {
  return <div className={'reducer'}>{props.children}</div>;
}

Table.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};