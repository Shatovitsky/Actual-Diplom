import { config } from '@constants';
import React from 'react';
import { useSelector } from 'react-redux';

import './index.scss';

function HourlyInformation() {
  const hourly = useSelector((state) => state.hourlyWeather.hourlyWeatherData);
  return (
    <div className='container'>
      <ul className='weather-week'>
        <li className='weather-week-container'>
          {hourly.map((item) => (
            <div key={item.dt_txt} className='weather-week__day'>
              <div className='weather-week__day_name'>
                {item.dt_txt.slice(11, 16)}
              </div>
              <img
                className='weather-week__day_icon'
                src={`${config.apiOpenweatherImg}${item.weather[0].icon}@2x.png`}
                alt=''
              />
              <h3 className='weather-week__day_degree'>
                {Math.round(item.main.temp)}°
              </h3>
            </div>
          ))}
        </li>
      </ul>
    </div>
  );
}

export default HourlyInformation;
