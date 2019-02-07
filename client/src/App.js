import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Container } from 'reactstrap';
import AdventuresListContainer from './redux/containers/AdventuresListContainer'
import GoAdventureContainer from './redux/containers/GoAdventureContainer'

class App extends Component {

  state = {
    currentView: "index"
  }

  render() {
    return (
      <Container>
        <h1>Welcome to my app!</h1>
        <AdventuresListContainer />
        {/* <GoAdventureContainer /> */}
      </Container>
    );
  }
}

const mapStateToProps = state => {

}

export default connect(mapStateToProps, {})(App);
