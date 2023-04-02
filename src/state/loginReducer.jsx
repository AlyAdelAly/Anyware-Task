const initalState = {
    user: null,
    token: localStorage.getItem('token'),
  };
  
  const loginReducer = (state = initalState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        localStorage.setItem('token', action.payload);
        return { ...state, token: action.payload };
      case 'LOGOUT':
        localStorage.removeItem('token');
        return { ...state, token: null };
      default:
        return state;
    }
  };
  
  export default loginReducer;