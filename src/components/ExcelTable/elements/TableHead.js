import React from 'react';
import './TableHead.css';
import PropTypes from 'prop-types';

export function TableHead(props) {
  return <div className={'table-head'}>{props.children}</div>;
}

TableHead.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};