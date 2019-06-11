import React, { Component } from "react";
import { products } from "../contract/products.json";
import List from "@material-ui/core/List";
import { GroceryProduct } from "./GroceryProduct.js";
import { Button } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

export class GroceryProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], downvote: true };
  }
  componentDidMount() {
    this.setState({ products: products });
  }
  updateAccordingToVotes = () => {
    let prods = [...this.state.products];
    if (this.state.downvote) prods.sort((a, b) => a.votes - b.votes);
    else prods.sort((a, b) => b.votes - a.votes);

    this.setState({ products: prods, downvote: !this.state.downvote });
  };

  render() {
    let products = (
      <List>
        {this.state.products.map(product => (
          <GroceryProduct
            key={product.id}
            name={product.name}
            votes={product.votes}
          />
        ))}
      </List>
    );

    return (
      <React.Fragment>
        <div className="layout-row root" style={{ overflow: "hidden" }}>
          <div
            className="flex-30"
            style={{ overflowY: "scroll", height: "39.5rem" }}
          >
            <span id="text"
              style={{ fontWeight: "bold" }}
              className="layout-row layout-align-center-center"
            >
              List of Products with Votes
            </span>
            {products}
          </div>
          <div className="flex-70 layout-column layout-align-center-center">
            <Button color="primary" id="updown" variant="outlined" onClick={this.updateAccordingToVotes}>
              {this.state.downvote ? "Down" : "Up"}
              {this.state.downvote ? (
                <Icon>arrow_downward</Icon>
              ) : (
                <Icon>arrow_upward</Icon>
              )}
            </Button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default GroceryProvider;
