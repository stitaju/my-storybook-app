import React from 'react';
import '../../sass/index.scss';
import PropTypes from 'prop-types';
import Icon from './Icons';

const icons = [
  'none',
  'icn-redirect-link',
  'icn-pin',
  'icn-models',
  'icn-labs',
  'icn-drag',
  'icn-check-circle-fill',
];

const Button = ({
  children,
  label = 'Submit',
  variant = 'primary',
  size = 'md',
  isLoading = false,
  suffixIcon = 'none',
  prefixIcon = 'none',
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
      onClick={() => {}}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  prefixIcon: PropTypes.oneOf(icons),
  suffixIcon: PropTypes.oneOf(icons),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  onClick: PropTypes.func,
};

export default Button;
