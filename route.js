myApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
        .when('/weather', {
            templateUrl: 'pages/weather.html',
            controller: 'wheatherController'
        })
        .when('/weather/:num', {
            templateUrl: 'pages/weather.html',
            controller: 'wheatherController'
        })
})