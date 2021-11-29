import React, {useEffect, useState} from 'react';
import { useAuthDispatch, logout, useAuthState } from '../../Context';
import axios from '../../services/apis/axios';
import WeatherCard from '../../Components/WeatherCard';
import styles from './home.module.css';

function Home(props) {
    const dispatch = useAuthDispatch();
    const userDetails = useAuthState();
    const [weatherData, setWeatherData] = useState([]);

    useEffect( () => {
        const fetchData = async () => {
            try {
                const {token} = userDetails;
                const {data} = await axios.get("weather", { headers: {"Authorization" : `Bearer ${token}`}});
                setWeatherData(Object.entries(data.data));
            } catch (err) {
                console.error(err);
            }
        }
        fetchData();
    },[]);

    const handleLogout = () => {
        logout(dispatch);
        props.history.push('/login');
    };

    return (
        <div style={{ padding: 10 }}>
            <div>
                <div  className={styles.header}>
                    <h1>Login Temperatures</h1>
                    <button className={styles.logoutBtn} onClick={handleLogout}>
                        Logout
                    </button>
                </div>
                {!userDetails.loading && <>
                    <div><p>Welcome {userDetails.user.email}</p></div>
                    <div className={styles.cardsSec}>
                        {weatherData && weatherData.map(([country,data])=> (<div key={country}>
                                <h2>{country}</h2>
                                {data.map(values => <WeatherCard countryWeather={values} key={values.id}/>)}
                        </div>)
                        ) }
                    </div>
                </>}
            </div>
        </div>
    );
}

export default Home;
