import React, { Component } from "react";
import Axios from "axios";
export default class Authors extends Component {
  constructor() {
    super();
    this.state = {
      authors: [],
    };
  }

  componentDIdMount() {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) =>
        this.setState({
          authors: response.data,
        })
      )
      .catch((err) => console.log(err));
  }

  render() {
    if (this.state.authors.length === 0) {
      return <div>Loading...</div>;
    } else {
      return <div>{JSON.stringify(this.state.authors)}</div>;
    }
  }
}
