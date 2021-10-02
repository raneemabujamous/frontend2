import React, { Component } from "react";
import axios from "axios";
import CardApi from "./CardApi";
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFromApi: [],
    };
  }
  componentDidMount = async () => {
    let reqApi = await axios.get(`http://localhost:8000/art`);
    this.setState({
      dataFromApi: reqApi.data,
    });
    console.log(this.state.dataFromApi);
  };

  addtofav = async (obj) => {
    await axios.post(`http://localhost:8000/postdata`, obj);
    console.log(obj);
  };

  render() {
    return (
      <>
        <CardApi
          dataFromApi={this.state.dataFromApi}
          addtofav={this.addtofav}
        />
      </>
    );
  }
}

export default Home;
