const defaultState = {
    customers: []
}

export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
      case 'ADD_CUSTOMER':
        return {...state, cash: state.cash + action.payloud}
      case 'GET_CUSTOMER':
        return {...state, cash: state.cash - action.payloud}
    
      default:
        return state
    }
  }