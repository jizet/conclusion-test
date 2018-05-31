import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as Actions from '../actions/App.actions'
import { isEmpty } from 'ramda';
import whyDidYouUpdate from 'why-did-you-update'
class UserList extends Component {

  render () {
    if (process.env.NODE_ENV !== 'production') {
      whyDidYouUpdate(React);
    }
    const { data, gender, nat, search } = this.props
    return (
      <div className="container">
      {/* Map over articles  */}
      {data
      .filter((item) => isEmpty(gender) ? true : item.gender === gender)
      .filter((item) => isEmpty(nat) ? true : item.nat === nat)
      .filter((item) => isEmpty(search) ? true : `${item.name.first} ${item.name.last}`.includes(search))
      .map((item, index) => {
        return (
          <div className="article" key={index}>
            <h4>{item.name.title} {item.name.first} {item.name.last}</h4>
            <p>{item.nat} {item.gender}</p>
          </div>
        );
      })}
      {/* Map over articles  */}
    </div>
    )
  }
}

const mapStateToProps = state => ({
  data: state.usersManager.data,
  gender: state.usersManager.gender,
  nat: state.usersManager.nat,
  search: state.usersManager.search
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);