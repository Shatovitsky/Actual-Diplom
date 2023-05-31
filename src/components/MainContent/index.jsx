import City from '@components/City';
import Date from '@components/Date';
import MainInformationWeather from '@components/MainInformationWeather';
import setBackgroundImages from '@utils';
import React from 'react';
import { useSelector } from 'react-redux';
import './index.scss';

function MainContent() {
  const nameWeather = useSelector((state) => state.searchData.nameWeather);
  const backgroundImage = setBackgroundImages(nameWeather);
  if (!backgroundImage) {
    return null;
  }
  return (
    <div
      className='main'
      style={{ backgroundImage: `url(${backgroundImage.middleImage})` }}
    >
      <div className='container'>
        <Date />
        <City />
      </div>
      <MainInformationWeather />
    </div>
  );
}

export default MainContent;
