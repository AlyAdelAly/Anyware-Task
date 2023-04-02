export const loginAction = () => (dispatch) => {
    dispatch({ type: 'LOGIN_SUCCESS', payload: 'token' });
};