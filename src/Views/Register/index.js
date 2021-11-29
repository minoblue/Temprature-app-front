import React, { useState } from 'react';

import { registerUser, useAuthState, useAuthDispatch } from '../../Context';
import styles from '../Login/login.module.css';

function Register(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useAuthDispatch();
    const { loading, errorMessage } = useAuthState();

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            let response = await registerUser(dispatch, { email, password, name });
            if (!response.user) return;
            props.history.push('/home');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={styles.container}>
            <div className={{ width: 200 }}>
                <h1>Register Page</h1>
                {errorMessage ? <p className={styles.error}>{errorMessage}</p> : null}
                <form>
                    <div className={styles.form}>
                        <div className={styles.formItem}>
                            <label htmlFor='name'>Name</label>
                            <input
                                type='text'
                                id='name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                disabled={loading}
                            />
                        </div>
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
                    <button onClick={handleRegister} disabled={loading}>
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register;
