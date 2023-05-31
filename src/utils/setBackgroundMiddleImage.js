function setBackgroundImages(nameWeather) {
  let middleImage = '';
  let mainImage = '';

  if (nameWeather === 'Rain') {
    middleImage =
      'https://images.wallpaperscraft.ru/image/single/zvezdnoe_nebo_mlechnyj_put_oblaka_118697_3840x2400.jpg';
    mainImage =
      'https://images.wallpaperscraft.ru/image/single/doroga_razmetka_oblaka_119319_3840x2400.jpg';
  } else if (nameWeather === 'Clouds') {
    middleImage =
      'https://images.wallpaperscraft.ru/image/single/most_konstruktsiia_beton_563056_3840x2400.jpg';
    mainImage =
      'https://images.wallpaperscraft.ru/image/single/skaly_more_bereg_117132_3840x2400.jpg';
  } else if (nameWeather === 'Haze') {
    middleImage =
      'https://data.1freewallpapers.com/download/forest-road-winding-dark-nature.jpg';
    mainImage =
      'https://get.wallhere.com/photo/cloud-sky-mountain-plant-ecoregion-world-snow-Natural-landscape-highland-slope-sunlight-tree-atmospheric-phenomenon-Terrain-morning-glacial-landform-landscape-mountainous-landforms-valley-sunrise-cumulus-geological-phenomenon-sunset-hill-mountain-range-Massif-winter-hill-station-Freezing-geology-evening-fell-plateau-arete-glacier-meteorological-phenomenon-rock-summit-ridge-forest-conifer-batholith-grassland-badlands-ice-cap-moraine-afterglow-horizon-tundra-cirque-Alps-dusk-pine-family-2057461.jpg';
  } else if (nameWeather === 'Clear') {
    middleImage =
      'https://images.wallpaperscraft.ru/image/single/neboskreby_zdaniia_gory_923697_3840x2400.jpg';
    mainImage =
      'https://images.wallpaperscraft.ru/image/single/palmy_nebo_derevia_123969_3840x2400.jpg';
  } else {
    console.error();
    return;
  }

  return {
    middleImage,
    mainImage,
  };
}

export default setBackgroundImages;
