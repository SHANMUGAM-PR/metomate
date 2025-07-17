# MetoMate - Weather Forecast & News Application

**MetoMate** is a responsive, full-featured weather application built with **React.js** that provides:
- Real-time weather conditions
- Hourly & weekly forecasts
- Latest weather-related news from India

With clean UI/UX and API integration, users can search any city and view its weather insights with ease.

---

## Features

- **Search** any city to get its weather instantly
- **Today's weather** with temperature, condition, wind info
- **Hourly forecast** with humidity, precipitation, wind
- **Weekly forecast** with daily temperature highs/lows
- **Live weather news** (fetched from NewsAPI)
- **Routing** using React Router
- **Auto-refresh news** every 2 hours / 5 minutes (NavNews)

---

## Tech Stack

- **React.js** - Frontend framework used to build the user interface.
- **React Router** - For page routing and navigation between components.
- **Axios** - Used for making API calls to fetch weather and news data.
- **WeatherAPI.com** - Source of real-time, hourly, and weekly weather data.
- **NewsAPI.org** - Provides the latest weather-related news articles.
- **CSS3** - Custom styling for a clean and responsive UI.

---

## Project Structure

metomate/
  build/                  - Build output folder
  node_modules/           - Installed dependencies
  public/                 - Static files like index.html
  src/
    components/           - Weather components
      HourlyWeather.js
      HourlyWeather.css
      WeeklyWeather.js
      WeeklyWeather.css
      TodayWeather.js
      SearchBar.js
      WeatherInfo.css
    News/                 - News-related components
      NavNews.js
      NavNews.css
      WeatherNews.js
      WeatherNews.css
    WeatherService.js     - Handles weather & news API calls
    App.js                - Main React App component
    App.css               - Global styling
    index.js              - ReactDOM render entry point
  .gitignore              - Git ignored files
  config-overrides.js     - Custom Create React App config
  package.json            - Project metadata and dependencies
  README.md               - Project documentation

---

## Installation & Setup

Follow the steps below to run this project locally:

### Step 1: Clone the Repository

```bash
git clone https://github.com/SHANMUGAM-PR/metomate.git
cd metomate
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Configure API Keys

You need API keys from [WeatherAPI](https://www.weatherapi.com/) and [NewsAPI](https://newsapi.org/).

Create a `.env` file in the root of the project and add:

```env
REACT_APP_WEATHER_API_KEY=your_weatherapi_key
REACT_APP_NEWS_API_KEY=your_newsapi_key
```

Then in your code, access them like:

```js
const weatherKey = process.env.REACT_APP_WEATHER_API_KEY;
const newsKey = process.env.REACT_APP_NEWS_API_KEY;
```

> Make sure to restart the development server after setting environment variables.

### Step 4: Start the Development Server

```bash
npm start
```

Visit: [http://localhost:3000](http://localhost:3000)

---




## Author

![Profile](https://github.com/SHANMUGAM-PR)

### **Shanmugam P R**  
 B.Tech IT Student |  Developer |  Placement Aspirant  
 Tamil Nadu, India

- [GitHub](https://github.com/SHANMUGAM-PR)
- [LinkedIn](https://www.linkedin.com/in/shanmugam-p-r-53331525a/)


---

## Contribution

Feel free to fork this repo and raise a pull request. Contributions are welcome!

```bash
# Fork the repo
git clone https://github.com/your-username/metomate.git
```

---

