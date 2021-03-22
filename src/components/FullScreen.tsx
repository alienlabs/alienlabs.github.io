//
// Copyright 2021 DXOS.org
//

import React from 'react';

import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minHeight: '100vh'
  }
});

/**
 * Full screen container.
 *
 * https://css-tricks.com/snippets/css/a-guide-to-flexbox
 */
const FullScreen = ({ children }) => {
  const classes = useStyles();

  return (
    <Box display="flex" flexDirection="column" className={classes.root}>
      {children}
    </Box>
  );
};

export default FullScreen;
