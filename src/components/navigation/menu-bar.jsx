import React, { Component } from "react";
import { Link } from "gatsby"
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Drawer from "@material-ui/core/Drawer";
import menuItems from "./menuItems";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import SocialLinks from "../categories/socialLinks.js"
import NavigationSearch from './../NavigationSearch';

import logoImg from "../../images/logo-white.svg"

const navTheme = createMuiTheme({
  props: {
      MuiButtonBase: {
        disableRipple: true,
      },
    },
  typography: {
    body1:  {
      fontFamily: 'Raleway, sans-serif',
      fontWeight:  600,
      fontSize: 14,
      color: '#FF7D5A',
      lineHeight: 1,
    },
  },
  overrides: {
    MuiCssBaseline: {
      typography: {
        fontFamily: 'Libre Franklin, sans-serif',
      },
    },
  },
});

class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick(item) {
    this.setState(prevState => ({ [item]: !prevState[item] }));
  }

  handler(children) {
    const { state } = this;
    return children.map(subOption => {
      if (!subOption.children) {
        return (
          <div key={subOption.name}>
            <ListItem button key={subOption.name}>
              <Link to={subOption.url} className="list-item-link">
                <ListItemText inset primary={subOption.name} />
              </Link>
            </ListItem>
          </div>
        );
      }
      return (
        <div key={subOption.name}>
          <ListItem button onClick={() => this.handleClick(subOption.name)}>
            <Link to={subOption.url} className="list-item-link">
              <ListItemText inset primary={subOption.name} />
            </Link>
            {state[subOption.name] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={state[subOption.name]} timeout="auto" unmountOnExit>
            {this.handler(subOption.children)}
          </Collapse>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="navigation-1 list-container">
        <ThemeProvider theme={navTheme}>
          <Drawer
            variant="persistent"
            anchor="left"
            open
          >
            
            <List>
              <ListItem key="menuHeading" divider disableGutters>
                <Link className="navbar-item" to="/" >
                  <img src={logoImg} width="200" alt="logo" />
                </Link>
              </ListItem>
              {this.handler(menuItems.data)}
            </List>

            <div className="navigation-2">
              <NavigationSearch />
              <ul className="misc-nav">
                <li><Link to="/article/category/drug-library/library/">Drug Library</Link></li>
                <li><Link to="/article/category/vet-qa-parent/vet-qa/">Vet Q&amp;A</Link> </li>
                <li><Link to="/vet-locator/">Vet Locator</Link></li>
                <li><Link to="/article/category/just-for-fun/">Just For Fun</Link></li>
                <li><Link to="/article/category/just-for-fun/surveys-polls/">Surveys &amp; Polls</Link></li>
                <li><Link to="/article/category/just-for-fun/reader-stories/">Reader Stories</Link></li>
              </ul>
              <SocialLinks />
            </div>
          </Drawer>
        </ThemeProvider>
      </div>
    );
  }
}
export default MenuBar;
