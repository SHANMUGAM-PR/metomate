import React, { useState, useEffect } from "react";
import axios from "axios";
import './NavNews.css'; // Importing the custom styles

const NavNews = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything`, {
            params: {
              apiKey: 'b421a4dd9a854a44b2b80075d0c5d734', // Your NewsAPI key
              q: 'weather india', // Query for weather news in India
              language: 'en', // Optionally specify the language
              sortBy: 'relevancy', // Sort articles by relevancy
            }
          }
        );
        setArticles(response.data.articles); // Access articles from the response
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news", error);
        setLoading(false);
      }
    };

    fetchWeatherNews(); // Fetch news initially

    // Set an interval to refetch news every 5 minutes
    const intervalId = setInterval(fetchWeatherNews, 300000); // 300,000 milliseconds = 5 minutes

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="news-container">
      {loading ? (
        <p>Loading news...</p>
      ) : (
        articles.map((article, index) => (
          <div key={index} className="news-card">
            <div className="image-container">
              {article.urlToImage && <img src={article.urlToImage} alt="News" />}
            </div>
            <div className="content-container">
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default NavNews;
