angular.module('scheduleModule', ['ngRoute'])
.config(function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    
    $routeProvider.when('/registerUser',{
        templateUrl: 'js/app/templates/register-user.template.html',
        controller: 'registerUser'
    })

    $routeProvider.when('/onlineSchedule', {
        templateUrl: 'js/app/templates/online-schedule.template.html',
        controller: 'onlineScheduleController'
    })

    $routeProvider.when('/loginUser', {
        templateUrl: 'js/app/templates/login-user.template.html',
        controller: 'loginUser'
    })


    $routeProvider.otherwise({ redirectTo: '/loginUser' })
})