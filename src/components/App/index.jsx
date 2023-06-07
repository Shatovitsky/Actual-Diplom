import { fetchWeatherData } from '@actions';
import MainContent from '@components/MainContent';
import MoreFacilities from '@components/MoreFacilities';
import Search from '@components/Search';
import setBackgroundImages from '@utils';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './index.scss';

function App() {
  const dispatch = useDispatch();
  const nameWeather = useSelector((state) => state.searchData.nameWeather);
  const backgroundImage = setBackgroundImages(nameWeather);

  useEffect(() => {
    dispatch(fetchWeatherData());
  }, []);

  if (!backgroundImage) {
    return null;
  }
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage.mainImage})` }}
      className='wrapper'
    >
      <Search />
      <MainContent />
      <MoreFacilities />
    </div>
  );
}

export default App;
