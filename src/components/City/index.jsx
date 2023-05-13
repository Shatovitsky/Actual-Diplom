import React from 'react';
import './index.scss';
import { useSelector } from 'react-redux';

function City() {
  const seacrhCity = useSelector((state) => state.searchData.city);
  const searchSysCity = useSelector((state) => state.searchData.sys);
  return (
    <div className='site'>
      <h2 className='site__city'>{seacrhCity}</h2>
      <h3 className='site__country-prefix'>{searchSysCity}</h3>
    </div>
  );
}

export default City;
