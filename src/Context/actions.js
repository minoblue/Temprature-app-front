import axios from '../services/apis/axios';

export async function loginUser(dispatch, loginPayload) {

    try {
        dispatch({ type: 'REQUEST_LOGIN' });
        const { data } = await axios.post('/auth/login',loginPayload);

        if (data.user) {
            dispatch({ type: 'LOGIN_SUCCESS', payload: data });
            localStorage.setItem('currentUser', JSON.stringify(data));
            return data;
        }

        dispatch({ type: 'LOGIN_ERROR', error: data.error });
        console.log(data.error);
    } catch (error) {
        dispatch({ type: 'LOGIN_ERROR', error: error });
        console.log(error);
    }
}

export async function registerUser(dispatch, registerPayload) {

    try {
        dispatch({ type: 'REQUEST_REGISTER' });
        const {data} = await axios.post('/auth/register', registerPayload);

        if (data.user) {
            dispatch({ type: 'REGISTER_SUCCESS', payload: data });
            localStorage.setItem('currentUser', JSON.stringify(data));
            return data;
        }

        dispatch({ type: 'REGISTER_ERROR', error: data.error });
        console.log(data.error);
    } catch (error) {
        dispatch({ type: 'REGISTER_ERROR', error: error });
        console.log(error);
    }
}

export async function logout(dispatch) {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
}
