import React from 'react';
import './TableRow.css';
import PropTypes from 'prop-types';

export function TableRow(props) {
  return <div className={'table-row'}>{props.children}</div>;
}

TableRow.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};