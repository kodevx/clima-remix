
export const formatWeatherData = (data) => {
    const formattedData = {
        name: data.name,    
        desc: data.weather[0].description,
        temp: data.main.temp,      
        speed: data.wind.speed,
        deg: data.wind.deg,
        feelsLike: data.main.feels_like,
        tempMax: data.main.temp_min,
        tempMin: data.main.temp_max,
        pressure: data.main.pressure,
        humidity: data.main.humidity
    }

    return formattedData;
}
