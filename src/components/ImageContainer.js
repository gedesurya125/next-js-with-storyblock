'use client';
import React from 'react';
import Image from 'next/image';

// External Components
import { Box } from 'theme/components';

//? Note: in next js we always have to define the image height and width, if we use Next Image, so the best option is using aspect ratio component

export const ImageContainer = ({
  src,
  alt,
  className,
  designatedRef,
  sx,
  imgProps,
  imgStyle,
  children,
  ...props
}) => {
  return (
    <Box
      ref={designatedRef}
      className={`image-container ${className}`}
      sx={{
        position: 'relative',
        width: '100%',
        ...sx
      }}
      {...props}>
      <NextImage
        style={{
          objectFit: 'cover',
          ...imgStyle
        }}
        fill
        src={src}
        alt={alt ? alt : ''}
        {...imgProps}
      />
      {/* Children meant to be use for adding any absolute style decoration */}
      {children}
    </Box>
  );
};

// we cannot use the jsx pragma to the Next Image
export const NextImage = ({ style, alt, src, ...props }) => {
  return (
    <Image
      className="next-image"
      style={{
        width: '100%',
        height: '100%',
        ...style
      }}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      src={src}
      alt={alt ? alt : ''}
      {...props}
    />
  );
};
