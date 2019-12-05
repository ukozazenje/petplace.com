import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import MenuBar from './menu-bar'
import MenuIcon from '../../images/menu.svg'
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

export default function TemporaryDrawer() {
  const disableRipple = createMuiTheme({
    props: {
      MuiButtonBase: {
        disableRipple: true,
      },
    },
  });

  const navbarButton = createMuiTheme({
    props: {
      MuiButton: {
        disableRipple: true,
      },
      MuiButtonBase: {
        disableRipple: true,
      },
    },
    overrides: {
      // Style sheet name ⚛️
      MuiButton: {
        // Name of the rule
        text: {
          background: 'transparent',
          border: 0,
        },
        root: {
          background: 'transparent',
          border: 0,
        },
      },
    },
  });

  const [state, setState] = React.useState({
    top: false
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div role="presentation">
    	<MenuBar />
    </div>
  );

  return (
  	<>
      <ThemeProvider theme={navbarButton}>
        <Button onClick={toggleDrawer('left', true)} className="menu-open"><img src={ MenuIcon } className="menu-icon" alt="menu icon" /></Button>
      </ThemeProvider>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)} className="drawer">
        <ThemeProvider theme={disableRipple}>
          <Button onClick={toggleDrawer('left', false)} className="menu-close">&#215;</Button>
        </ThemeProvider>
        {sideList('left')}
      </Drawer>
    </>
  );
}
