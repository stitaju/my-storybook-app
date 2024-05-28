import React from 'react';
import PropTypes from 'prop-types';
import '../../sass/index.scss';

const Icon = ({
  className = 'icn-activity',
  variant = 'primary',
}) => {
  return (
    <i
      className={`${className} ${variant !== 'default' ? `text-${variant}` : ''}`}
    ></i>
  );
};

Icon.propTypes = {
  className: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['default', 'primary', 'muted']),
};

export default Icon;
