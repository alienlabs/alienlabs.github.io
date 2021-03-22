//
// (C) 2021 alienlabs.io
//

import { muiTheme } from 'storybook-addon-material-ui'

import { createMuiTheme } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';

// https://material-ui.com/customization/theming
const theme = createMuiTheme({
  overrides: {
    // TODO(burdon): Destroyed by storybook?
    MuiCssBaseline: {
      '@global': {
        body: {
          margin: 0,
          overflow: 'hidden' // Prevent bounce.
        }
      }
    }
  },
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true
    },
  },
  transitions: {
    create: () => 'none' // Globally disable transitions.
  }
});

// https://storybook.js.org/addons/storybook-addon-material-ui
export const decorators = [
  muiTheme([theme])
];

export const parameters = {
  actions: {
    argTypesRegex: '^on[A-Z].*'
  },
  layout: 'fullscreen'
};
