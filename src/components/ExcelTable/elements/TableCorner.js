import React from 'react';
import PropTypes from 'prop-types';
import './TableCorner.css';

export function TableCorner(props) {
  return (<div className={'table-corner'}>{props.children}</div>);
}

TableCorner.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};