require('angular');

let appCtrl = require('./controllers/appCtrl');

angular.module('app',[]);
angular.module('app').controller('appCtrl',['$scope',appCtrl]);