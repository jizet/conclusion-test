import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './actions/App.actions';
import UserManagement from './components/userManagement';
import UserList from './components/usersList'
import './App.style.css';

class App extends Component {

  componentDidMount() {
    this.props.getData()
  }

  render() {
    return (
      this.props.loading 
        ? <div className="container text-center default-padding">Loading...</div>
        : <div className="App">
            <header className="container default-padding">
              <UserManagement />
            </header>
            <main className="main default-padding">
              <UserList />
            </main>
          </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.usersManager.loading,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
