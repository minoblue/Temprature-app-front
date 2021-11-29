import React, { useState } from 'react';

import { loginUser, useAuthState, useAuthDispatch } from '../../Context';
import styles from './login.module.css';

function Login(props) {
    const [email, setEmail] = useState('mino1@gmail.com');
    const [password, setPassword] = useState('Nadun@123');

    const dispatch = useAuthDispatch();
    const { loading, errorMessage } = useAuthState();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            let response = await loginUser(dispatch, { email, password });
            if (!response.user) return;
            props.history.push('/home');
        } catch (error) {
            console.log(error);
        }
    };

    const clickRegister = (e) => {
        e.preventDefault();
        props.history.push('/register');
    };

    return (
        <div className={styles.container}>
            <div className={{ width: 200 }}>
                <h1>Login Page</h1>
                {errorMessage ? <p className={styles.error}>{errorMessage}</p> : null}
                <form>
                    <div className={styles.form}>
                        <div className={styles.formItem}>
                            <label htmlFor='email'>Email</label>
                            <input
                                type='text'
                                id='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={loading}
                            />
                        </div>
                        <div className={styles.formItem}>
                            <label htmlFor='password'>Password</label>
                            <input
                                type='password'
                                id='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                disabled={loading}
                            />
                        </div>
                    </div>
                    <button onClick={handleLogin} disabled={loading}>
                        login
                    </button>
                </form>
            </div>
            <div>
                <h4>Register here</h4>
                <button onClick={clickRegister} disabled={loading}>
                    Register
                </button>
            </div>

        </div>
    );
}

export default Login;
