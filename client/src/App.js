import React, { Component } from 'react';
import { connect } from 'react-redux'
import AdventuresListContainer from './redux/containers/AdventuresListContainer'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to my app!</h1>

        <AdventuresListContainer />
      </div>
    );
  }
}

const mapStateToProps = state => {

}

export default connect(mapStateToProps, {})(App);
