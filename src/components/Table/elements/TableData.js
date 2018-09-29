import React from 'react';
import './TableData.css';
import PropTypes from 'prop-types';

export function TableData(props) {
  return (<div className={'table-data'}>{props.children}</div>);
}

TableData.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};