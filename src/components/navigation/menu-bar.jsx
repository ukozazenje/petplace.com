import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Drawer from "@material-ui/core/Drawer";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import menuItems from "./menuItems";
import { ListItemIcon } from "@material-ui/core";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";

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
    const { menuOptions } = this.props;
    return (
      <div className="list-container">
        <Drawer
          variant="persistent"
          anchor="left"
          open
        >
          <div>
            <List>
              <ListItem key="menuHeading" divider disableGutters>
                <ListItemText
                  className="list-item-text"
                  inset
                  primary="Menu"
                />
              </ListItem>
              {this.handler(menuItems.data)}
            </List>
          </div>
        </Drawer>
      </div>
    );
  }
}
export default MenuBar;
