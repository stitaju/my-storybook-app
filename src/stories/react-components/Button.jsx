import React from 'react';
import '../../sass/index.scss';
import PropTypes from 'prop-types';

const Button = ({
  label = 'Click Me!',
  variant = 'primary',
  isLoading = false,
  size = 'md',
  ...props
}) => {
  function checkVariant(variant) {
    if (variant === 'primary') {
      return 'btn-loading';
    } else if (variant === 'secondary') {
      return 'btn-loading-dark';
    } else return '';
  }

  return (
    <button
      className={`btn btn-${variant} btn-${size} ${isLoading ? checkVariant(variant) : ''}`}
      {...props}
      onClick={() => {}}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  onClick: PropTypes.func,
};

export default Button;
