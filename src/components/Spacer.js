import React from 'react';

// External Components
import { Box, GridItem } from 'theme/components';

export const Spacer = ({ className, height = null, display = null, sx }) => {
  return (
    <Box
      className={className || 'spacer'}
      sx={{
        height,
        display,
        ...sx
      }}
    />
  );
};

export const GridSpacer = ({ height = null, display = null, sx }) => {
  return (
    <GridItem
      className="spacer"
      sx={{
        height,
        display,
        ...sx
      }}
    />
  );
};
