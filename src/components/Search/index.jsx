import {
  searchData,
  searchDataSys,
  searchDataTemp,
  searchDataMainImg,
  searchDataDaily,
  searchDataHourly,
  searchNameWeather,
} from '@actions';
import fetchWeatherData from '@API/fetchWeatherData';
import fetchGetDaysWeather from '@API/getDaysDataWeather';
import fetchGetHourlyWeather from '@API/getHourlyDataWeather';
import ButtonSearch from '@components/UI/ButtonSearch';
import Input from '@components/UI/Input';
import { DELAY_FOR_FIND_CITIES, config } from '@constants';
import _ from 'lodash';
import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import './index.scss';

function Search() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedResult, setSelectedResult] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [isInvalidInput, setIsInvalidInput] = useState(false);

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    if (
      event.target === document.activeElement &&
      newSearchTerm.trim() === ''
    ) {
      setIsInvalidInput(true);
      return;
    }

    if (selectedResult) {
      setSelectedResult(null);
      setSearchResults([]);
      setIsInvalidInput(false);
      return;
    }

    if (newSearchTerm.trim() !== '') {
      setIsInvalidInput(false);
      searchCities(newSearchTerm);
    } else {
      setSearchResults([]);
    }
  };

  const searchCities = _.debounce(async (searchTerm) => {
    const regex = /^[A-Z][a-zA-Z\s]*$/;
    if (!regex.test(searchTerm)) {
      setIsInvalidInput(true);
      return;
    }

    const url = `${config.apiAccuweatherUrl}apikey=${
      config.apiKeyAccuweather
    }&q=${encodeURIComponent(searchTerm)}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Error');
      }
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error(error);
    }
  }, DELAY_FOR_FIND_CITIES);

  const handleResultClick = useCallback(
    async (result) => {
      setSelectedResult(result);
      setSearchResults([]);
      setSearchTerm(`${result.LocalizedName}, ${result.Country.LocalizedName}`);
      const weatherData = await fetchWeatherData(result.LocalizedName);
      const days = await fetchGetDaysWeather(result.LocalizedName);
      const hourly = await fetchGetHourlyWeather(result.LocalizedName);
      dispatch(searchData(weatherData.name));
      dispatch(searchDataSys(weatherData.sys.country));
      dispatch(searchNameWeather(weatherData.weather[0].main));
      dispatch(searchDataTemp(weatherData.main.temp));
      dispatch(searchDataMainImg(weatherData.weather[0].icon));
      dispatch(searchDataDaily(days.data));
      dispatch(searchDataHourly(hourly.list));
    },
    [fetchWeatherData, fetchGetDaysWeather, fetchGetHourlyWeather],
  );

  const handleKeyPress = (event) => {
    const char = event.key;
    const pattern = /[A-Za-z\s]/;

    if (!pattern.test(char)) {
      event.preventDefault();
    }
  };

  return (
    <div>
      <div className='container-for-seacrh'>
        <input
          className='search'
          type='text'
          placeholder='Input city...'
          value={
            selectedResult ? `${selectedResult.LocalizedName}` : searchTerm
          }
          onChange={handleSearchChange}
          onKeyPress={handleKeyPress}
          disabled={selectedResult}
        />
        {selectedResult && (
          <button
            className='close-button'
            type='button'
            onClick={() => setSelectedResult(null)}
          />
        )}
      </div>

      <ul className='result'>
        {searchResults.map((result) => (
          <li key={result.Key} onClick={() => handleResultClick(result)}>
            {result.LocalizedName}, {result.Country.LocalizedName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
