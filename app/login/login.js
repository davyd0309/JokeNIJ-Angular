/**
 * Created by Konrad on 01.04.2017.
 */
'use strict';

angular.module('myApp.login', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'login/login.html',
            controller: 'loginCtrl'
        });
    }])


    .controller('loginCtrl', [function () {


    }]);

