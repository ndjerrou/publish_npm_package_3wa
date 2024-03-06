import axios from 'axios';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export default (city, apiKey) =>
  axios(BASE_URL, {
    params: {
      q: city,
      appid: apiKey,
      units: 'metric',
      lang: 'fr',
    },
  }).then(
    ({
      data: {
        main: { temp: temperature },
      },
    }) => temperature
  );
