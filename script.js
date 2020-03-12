axios.get("https://api.data.gov.sg/v1/environment/2-hour-weather-forecast")
  .then(function (response) {
    console.log(response);
    console.log(response.data.items);
  })