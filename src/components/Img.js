import React from 'react';
import PropTypes from 'prop-types';

const Img = ({ src, alt, width, height }) => (
  <img
    style={{
      width: width || '100%',
      height: height || 'auto',
      maxWidth: '100%',
      boxShadow: '0px 2px 4px 1px rgba(0,0,0,0.25)',
    }}
    src={src}
    alt={alt}
  />
);

Img.propTypes = {
  src: PropTypes.any,
  alt: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Img;
