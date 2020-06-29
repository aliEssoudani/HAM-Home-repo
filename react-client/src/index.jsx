import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import SelectAction from "./components/selectAction.jsx";
import SearchedHome from "./components/searchedHome.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: "/items",
  //     success: (data) => {
  //       this.setState({
  //         items: data,
  //       });
  //     },
  //     error: (err) => {
  //       console.log("err", err);
  //     },
  //   });
  // }

  render() {
    return <SearchedHome />;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
