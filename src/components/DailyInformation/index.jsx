import { config, weekdays } from '@constants';
import React from 'react';
import { useSelector } from 'react-redux';

import './index.scss';

function DailyInformation() {
  const days = useSelector((state) => state.weeklyWeather.weeklyWeatherData);
  const week = days.map((day) => day.datetime);

  function getWeatherIconUrl(iconCode) {
    return `${config.apiWeatherbitImg}${iconCode}.png`;
  }

  const imgDays = days
    .slice(1)
    .map((item) => getWeatherIconUrl(item.weather.icon));

  const mappedDates = week.slice(1).map((date) => {
    const dateObject = new Date(date);
    const dayOfWeek = dateObject.getDay();
    return weekdays[dayOfWeek];
  });

  return (
    <div className='container'>
      <ul className='weather-week-container'>
        {mappedDates.map((name, index) => (
          <li key={index} className='weather-week__day'>
            <div className='weather-week__day_name'>{name}</div>
            <img
              className='weather-week__day_icon'
              src={imgDays[index]}
              alt='weather-icon'
            />
            <h3 className='weather-week__day_degree'>
              {Math.round(days[index].temp)}°
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DailyInformation;
