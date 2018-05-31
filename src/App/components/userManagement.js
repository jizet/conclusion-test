import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as Actions from '../actions/App.actions'

class UserManagement extends Component {

  constructor (props) {
    super (props)
    this.filterNat = this.filterNat.bind(this)
    this.filterGender = this.filterGender.bind(this)
    this.search = this.search.bind(this)
    
  }

  filterNat (event) {
    this.props.setFilterNat(event.target.value)
  }

  filterGender (event) {
    this.props.setFilterGender(event.target.value)
  }

  search (event) {
    this.props.searchUser(event.target.value)
  }

  render () {
    const nationalities = [ 'AU', 'BR', 'CA', 'CH', 'DE', 'DK', 'ES', 'FI', 'FR', 'GB', 'IE', 'IR', 'NL', 'NZ', 'TR', 'US']
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-8 offset-2 text-center">
            <h4>Application</h4>
            <div className="row">
              <div className="col-8 offset-2">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Search"
                    className="searchfield form-control text-center"
                    onKeyUp={this.search}
                  />
                </div>
              </div>
              <div className="col-2">
                <button className="btn btn-primary">Search</button>
              </div>
            </div>
          </div>
        </div>
  
        <div className="row">
          <div className="col-4 offset-2 dropdown">
            <select className="form-control form-control-sm" value={this.props.gender} onChange={this.filterGender}>
              <option value=''>No gender</option>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
            </select>
          </div>
          <div className="col-4 dropdown">
            <select className="form-control form-control-sm" value={this.props.nat} onChange={this.filterNat}>
            <option>No nationality</option>
            {
              nationalities.map((nationality, index) => {
                return <option key={index} value={nationality}>{nationality}</option>
              })
            }
            </select>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  gender: state.usersManager.gender,
  nat: state.usersManager.nat,
  search: state.usersManager.search
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(UserManagement);