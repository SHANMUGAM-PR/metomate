import React, { useState } from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import TodayWeather from './components/TodayWeather';
import HourlyWeather from './components/HourlyWeather';
import WeeklyWeather from './components/WeeklyWeather';
import SearchBar from './components/SearchBar';
import WeatherNews from './News/WeatherNews'; // Importing WeatherNews component
import './App.css';
import NavNews from './News/NavNews';

const App = () => {
    const [city, setCity] = useState('');

    const handleCitySubmit = (city) => {
        setCity(city);
    };

    return (
        <Router>
            <div className="app-container">
                <div className="header">
                    <div className="app-name">
                        <h1>MetoMate</h1>
                    </div>
                    <SearchBar onSubmit={handleCitySubmit} />
                </div>

                <nav className="navbar">
                    <NavLink to="/" className="nav-link">Today</NavLink>
                    <NavLink to="/hourly" className="nav-link">Hourly</NavLink>
                    <NavLink to="/weekly" className="nav-link">Weekly</NavLink>
                    <NavLink to="/navnews" className="nav-link">News</NavLink> {/* New link for News */}
                </nav>

                <div className="component-data">
                    <Routes>
                        <Route path="/" element={
                            <>
                                <TodayWeather city={city} />
                                <WeatherNews />
                            </>
                        } />
                        <Route path="/hourly" element={<HourlyWeather city={city} />} />
                        <Route path="/weekly" element={<WeeklyWeather city={city} />} />
                        <Route path="/news" element={<WeatherNews />} /> {/* Route for News */}
                        <Route path="/ncdavnews" element={<NavNews />} />

                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
