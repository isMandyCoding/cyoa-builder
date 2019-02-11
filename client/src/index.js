import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import AdventuresListContainer from './redux/containers/AdventuresListContainer';
import GoAdventureContainer from './redux/containers/GoAdventureContainer';
import Navigation from './components/Navigation';
import NewAdventureForm from './components/NewAdventureForm';
import SearchbarContainer from './redux/containers/SearchbarContainer';
import SearchBar from './components/SearchBar'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Navigation />
                <SearchbarContainer />
                <Route exact path="/" component={AdventuresListContainer} />
                <Route exact path="/adventures/:adventure_id" component={GoAdventureContainer} />
                <Route exact path="/new/adventure" component={NewAdventureForm} />
            </div>
            {/* <App /> */}
        </Router>
    </Provider>,
    document.getElementById('root')
);

