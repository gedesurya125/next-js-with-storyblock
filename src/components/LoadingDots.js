'use client';
import React from 'react';

// External Components
import { Box } from 'theme/components';
import { keyframes } from '@emotion/react';
import { colors } from 'theme/colors';

export const LoadingDots = ({ sx, ...props }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...sx
      }}
      {...props}>
      <Dot
        sx={{
          animationDelay: '0s'
        }}
      />
      <Dot
        sx={{
          animationDelay: '0.5s'
        }}
      />
      <Dot
        sx={{
          animationDelay: '1s'
        }}
      />
    </Box>
  );
};

const pulse = keyframes`
  0% {
    background-color: ${colors.primary};
  }
  50%, 100% {
    background-color: ${colors.lightGray};
  }
`;

const Dot = ({ sx }) => {
  return (
    <Box
      className="__loading-pulse-dot"
      sx={{
        width: '1rem',
        height: '1rem',
        borderRadius: '50%',
        backgroundColor: 'lightGray',
        animation: `${pulse} 1s infinite alternate`,
        '& ~ .__loading-pulse-dot': {
          ml: '0.3rem'
        },
        ...sx
      }}
    />
  );
};
