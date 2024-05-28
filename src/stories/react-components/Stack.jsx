import React from 'react';
import PropTypes from 'prop-types';

const Stack = ({
  children,
  direction = 'row',
  wrap = false,
  spacing = 8,
  btnVariant = 'primary',
}) => {
  const style = {
    display: 'flex',
    flexDirection: direction,
    flexWrap: wrap ? 'wrap' : 'nowrap',
    gap: `${spacing * 0.25}rem`,
  };

  return (
    <div style={style}>
      {children.length !== 0
        ? children
        : 'Expected Syntax: <Stack>{children}</Stack> : children not found! '}
    </div>
  );
};

Stack.propTypes = {
  direction: PropTypes.oneOf(['row', 'column']),
  wrap: PropTypes.bool,
  spacing: PropTypes.number,
  btnVariant: PropTypes.oneOf(['primary', 'secondary']),
};

export default Stack;
