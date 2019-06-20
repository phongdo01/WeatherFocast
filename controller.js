myApp.controller('homeController', function ($scope, $location, sendData) {
    $scope.$watch('nameOfCity', function () {
        console.log($scope.nameOfCity);
        sendData.city = $scope.nameOfCity;
    })
    $scope.submit = function(){
        $location.path('/weather')
    }
})

myApp.controller('wheatherController', function ($scope, $routeParams, sendData, weatherService) {
    $scope.city = sendData.city;
    $scope.num = $routeParams.num || 2;
    
    $scope.weatherResult = weatherService.getWeatherAPI($scope.city, $scope.num);
    console.log($scope.weatherResult);
    $scope.formatDate = function (dt) {
        return new Date(dt * 1000);
    }
})