import * as React from "react";
import { hot } from "react-hot-loader";
import { connect } from "react-redux";

import * as PropTypes from "prop-types";
import { bindActionCreators } from "redux";

import { Creators as AuthCreators } from "../../redux/actions/auth";

@connect(
  state => ({
    location: state.router.location
  }),
  dispatch => bindActionCreators({ ...AuthCreators }, dispatch)
)
class App extends React.Component<any, any> {
  static state = {};

  static childContextTypes = {
    socket: PropTypes.object.isRequired
  };

  getChildContext() {
    return {
      socket: this.props.socket
    };
  }

  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
  }

  componentDidMount() {
    // const self = this;
  }

  login() {
    this.props.loginUserSuccess();
  }

  render() {
    // const self = this;

    return (
      <section id="app">
        <h1>App</h1>
        <h2>Location: {this.props.location.pathname}</h2>

        {this.props.children}
        <a onClick={this.login}>Login Action</a>
      </section>
    );
  }
}

export default hot(module)(App);
