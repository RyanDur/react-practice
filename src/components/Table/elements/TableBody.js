import React from 'react';
import './TableBody.css';
import PropTypes from 'prop-types';

export function TableBody(props) {
  return <div className={'table-body'}>{props.children}</div>;
}

TableBody.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};