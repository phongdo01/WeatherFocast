myApp.service('sendData', function () {
    this.city = 'Ha Noi';
})

myApp.service('weatherService', function ($resource) {
    this.getWeatherAPI = function (city, num) {
        var weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily');
        return weatherAPI.get({
            q: city,
            appid: '279b4be6d54c8bf6ea9b12275a567156',
            cnt: num,
            units: 'metric',
            lang: 'vi'
        });
    }
})