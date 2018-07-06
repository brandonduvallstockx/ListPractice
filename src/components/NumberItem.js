import React from 'react';
import PropTypes from 'prop-types'

const NumberItem = ({ value }) => (
<li>{value}</li>
);

NumberItem.propTypes = {
  value: PropTypes.number.isRequired
};

export default NumberItem;
