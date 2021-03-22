//
// Copyright 2021 DXOS.org
//

import React from 'react';

import { Box } from '@material-ui/core';

/**
 * Centered container.
 */
const Center = ({ children }) => {
  return (
    <Box display="flex" flex={1} flexDirection="column" justifyContent="center">
      <Box display="flex" flexDirection="row" justifyContent="center">
        {children}
      </Box>
    </Box>
  );
};

export default Center;
