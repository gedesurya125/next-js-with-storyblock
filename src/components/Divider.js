'use client';
import React from 'react';

// External Components
import { Box } from 'theme/components';

export const Divider = ({ sx, ...props }) => {
  return (
    <Box
      className="horizontal-divider"
      as="hr"
      sx={{
        borderTop: '1px solid',
        borderColor: 'primary',
        ...sx
      }}
      {...props}
    />
  );
};

export const VerticalDivider = ({ sx, ...props }) => {
  return (
    <Box
      className="vertical-divider"
      as="hr"
      sx={{
        borderRight: '1px solid',
        borderColor: 'primary',
        ...sx
      }}
      {...props}
    />
  );
};
