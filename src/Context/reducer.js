
let user = localStorage.getItem('currentUser')
    ? JSON.parse(localStorage.getItem('currentUser')).user
    : '';
let token = localStorage.getItem('currentUser')
    ? JSON.parse(localStorage.getItem('currentUser')).token
    : '';

export const initialState = {
    user: '' || user,
    token: '' || token,
    loading: false,
    errorMessage: null,
};

export const AuthReducer = (initialState, action) => {
    switch (action.type) {
        case 'REQUEST_LOGIN':
        case 'REQUEST_REGISTER':
            return {
                ...initialState,
                loading: true,
            };
        case 'LOGIN_SUCCESS':
        case 'REGISTER_SUCCESS':
            return {
                ...initialState,
                user: action.payload.user,
                token: action.payload.token,
                loading: false,
            };
        case 'LOGOUT':
            return {
                ...initialState,
                user: '',
                token: '',
            };

        case 'LOGIN_ERROR':
        case 'REGISTER_ERROR':
            console.log('Inside login error');
            return {
                ...initialState,
                loading: false,
                errorMessage: action.error,
            };

        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};
