import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
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
    <div
      role="presentation"
    >   
    	<MenuBar />
    </div>
  );


  return (
  	<>
	  <Button onClick={toggleDrawer('left', true)} className="menu-open"><img src={ MenuIcon } className="menu-icon"/></Button>
	  <Drawer open={state.left} onClose={toggleDrawer('left', false)} className="drawer">
	  	<Button onClick={toggleDrawer('left', false)} className="menu-close">&#215;</Button>
	    {sideList('left')}
	  </Drawer>
	</>
  );
}
