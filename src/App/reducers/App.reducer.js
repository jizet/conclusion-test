import { DATA_AVAILABLE, FILTER_GENDER, FILTER_NAT, SEARCH_USER } from '../actions/App.actions'

const initialState = {
  loading: true,
  data: [],
  gender: '',
  nat: '',
  search: ''
};

export const usersManager = (state = initialState, action) => {
  switch (action.type) {
    case DATA_AVAILABLE:
      return {
        ...state,
        loading: false,
        data: action.data
      };
      case FILTER_GENDER:
        return {
          ...state,
          gender: action.gender
        };
      case FILTER_NAT:
        return {
          ...state,
          nat: action.nat
        };
      case SEARCH_USER:
        return {
          ...state,
          search: action.user
        }
    default:
      return state;
  }
};
