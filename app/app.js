require('angular');

var appCtroller = require('./controller/appController')

angular.module('app',[]);
angular.module('app').controller('appController',['$scope',appController]);