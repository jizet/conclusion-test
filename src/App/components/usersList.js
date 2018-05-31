import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as Actions from '../actions/App.actions'
import { isEmpty } from 'ramda';
import styled from 'styled-components'

const UserContainer = styled.div`
  display: flex;
  flex-direction: row nowrap;
  align-items: center;
  justify-items: space-between;
`

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;`

const Name = styled.div`
  display: flex;
`

const Details = styled.div`
  display: flex;
`
class UserList extends Component {
  render () {
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
          <UserContainer className="article" key={index}>
            <img src={item.picture.medium} />
            <InformationContainer>
              <Name>{item.name.title} {item.name.first} {item.name.last}</Name>
              <Details>{item.nat} {item.gender}</Details>
            </InformationContainer>
          </UserContainer>
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