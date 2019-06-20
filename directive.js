myApp.directive('weatherDirective', function(){
    return {
        templateUrl: 'directive/weatherDirective.html',
        replace: true,
        scope: {
            weather: '=',
            formatDate: '&',
            formatOfDate: '@'
        }
    }
})