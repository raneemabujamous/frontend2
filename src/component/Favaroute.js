import axios from "axios";
import React, { Component } from "react";
import CardFavitem from "./CardFavitem";

export class Favaroute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromPostreq: [],
      showFavitem: false,
    };
  }
  componentDidMount = async () => {
    let req = await axios.get(`http://localhost:8000/getmethod`);
    this.setState({
      fromPostreq: req.data,
      showFavitem: true,
    });
  };
  deleteitem = async (slug) => {
    let res = await axios.delete(`http://localhost:8000/deletedata/${slug}`);
    this.setState({
      fromPostreq: res.data,
    });
  };
  render() {
    return (
      <>
        {this.state.showFavitem && (
          <CardFavitem
            fromPostreq={this.state.fromPostreq}
            deleteitem={this.deleteitem}
          />
        )}
      </>
    );
  }
}

export default Favaroute;
