import React, { Component } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export class GroceryProduct extends Component {
  render() {
    return (
      <ListItem alignItems="center" divider={true}>
        <ListItemText primary={this.props.name} secondary={this.props.votes} />
      </ListItem>
    );
  }
}
