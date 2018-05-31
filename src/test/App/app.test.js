import * as actions from '../../App/actions/App.actions'
import {usersManager} from '../../App/reducers/App.reducer'
const INITIAL_STATE = {
  loading: true,
  data: [],
  gender: '',
  nat: '',
  search: ''
}

describe('App reducers', () => {
  it('Return data when fetch API', () => {
    const dataAvailable = {
      type: actions.DATA_AVAILABLE
    }
    expect(usersManager(INITIAL_STATE, dataAvailable)).not.toEqual(INITIAL_STATE)
  });
})