import React from 'react';
import './TableFooter.css';
import PropTypes from 'prop-types';

export function TableFooter(props) {
  return <div className={'table-footer'}>{props.children}</div>;
}

TableFooter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};