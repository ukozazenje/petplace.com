import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import MenuBar from './menu-bar'
import MenuIcon from '../../images/menu.svg'

export default function TemporaryDrawer() {
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
      <Button onClick={toggleDrawer('left', true)} className="menu-open"><img src={ MenuIcon } className="menu-icon" alt="menu icon" /></Button>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)} className="drawer">
        <Button onClick={toggleDrawer('left', false)} className="menu-close">&#215;</Button>
        {sideList('left')}
      </Drawer>
    </>
  );
}
