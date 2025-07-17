import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './WeatherNews.css';

const WeatherNews = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchWeatherNews = async () => {
        const API_KEY = 'b421a4dd9a854a44b2b80075d0c5d734'; // Your NewsAPI key
        const URL = `https://newsapi.org/v2/everything?q=weather%20AND%20India&apiKey=${API_KEY}&pageSize=10&sortBy=publishedAt`; // Request up to 10 articles

        try {
            const response = await axios.get(URL);
            // Filter articles to get only those containing 'weather'
            const weatherArticles = response.data.articles.filter(article => {
                return article.title.toLowerCase().includes('weather') || article.description.toLowerCase().includes('weather');
            });

            if (weatherArticles.length < 6) {
                setArticles(weatherArticles); // Set available articles if less than 6
            } else {
                setArticles(weatherArticles.slice(0, 6)); // Limit to the first 6 articles
            }

            if (weatherArticles.length === 0) {
                setError('No weather news articles found.');
            }
        } catch (error) {
            setError('Failed to fetch weather news articles.');
            console.error('Error fetching the news', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWeatherNews();
        const intervalId = setInterval(fetchWeatherNews, 2 * 60 * 60 * 1000); // Update every 2 hours

        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="weather-news">
            <h2>Weather News</h2>
            <div className="news-grid">
                {articles.map((article, index) => (
                    <div key={index} className="news-item">
                        <div className="news-image">
                            {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
                        </div>
                        <div className="news-content">
                            <h3>{article.title}</h3>
                            <p>{new Date(article.publishedAt).toLocaleString()}</p>
                            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeatherNews;
