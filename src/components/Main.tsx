//
// Copyright 2021 DXOS.org
//

import React from 'react';

import { Box, makeStyles } from '@material-ui/core';

import FullScreen from './FullScreen';
import Icon from './Icon';

const useStyles = makeStyles(() => ({
  '@global': {
    body: {
      backgroundColor: '#EEE',
      margin: 0
    },
    a: {
      color: '#555',
      textDecoration: 'none'
    }
  },
  content: {
    width: 900,
    fontFamily: 'skia',
    color: '#555'
  },
  title: {
    fontSize: 80,
    letterSpacing: 16,
    fontWeight: 200,
    color: '#333',
    '& span:first-child': {
      fontWeight: 400
    }
  },
  icon: ({ logoSize }: { logoSize: number }) => ({
    width: logoSize,
    height: logoSize,
    marginRight: 24,
    '& svg': {
      width: logoSize,
      height: logoSize
    }
  }),
  info: ({ logoSize }: { logoSize: number }) => ({
    marginLeft: logoSize + 24
  }),
  subtitle: {
    paddingLeft: 8,
    fontSize: 24,
    marginTop: 24,
    marginBottom: 24
  },
  link: {
    marginTop: 6,
    paddingLeft: 8,
    fontSize: 20
  }
}));

export interface MainProps {
  domain: string
}

const Link = ({ url, label = undefined }) => (
  <a target="_blank" href={url}>{label || url}</a>
);

const Main = ({ domain = '' }: MainProps) => {
  const classes = useStyles({ logoSize: 100 });

  const title = domain.split('.')[0];
  const name = title.replace(':', '');

  return (
    <FullScreen>
      <Box display="flex" flex={1} flexDirection="column" justifyContent="center">
        <Box display="flex" flexDirection="row" justifyContent="center">
          <Box display="flex" flexDirection="column" className={classes.content}>
            <Box display="flex" alignItems="center">
              <div className={classes.icon}>
                <Icon />
              </div>
              <div className={classes.title}>
                {title.split(':').map((part, i) => (
                  <span key={i}>{part.toUpperCase()}</span>
                ))}
              </div>
            </Box>
            <Box display="flex" flexDirection="column" className={classes.info}>
              <div className={classes.subtitle}>Creative intelligence&trade;</div>
              <div>
                <div className={classes.link}>info@{domain.replace(':', '')}</div>
                <div className={classes.link}>
                  <Link url={`https://github.com/${name}`} label={`github.com/${name}`} />
                </div>
                <div className={classes.link}>
                  <Link url={`https://twitter.com/${name}`} label={`@${name}`} />
                </div>
              </div>
            </Box>
          </Box>
        </Box>
      </Box>
    </FullScreen>
  );
};

export default Main;
