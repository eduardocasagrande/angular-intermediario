require('angular');
require('./locale/angular-locale_pt-br.js');

let clientAPIService = require('./services/clientAPIService');
let MainController = require('./controllers/MainController');
let maskTel = require('./directives/maskTel');
let alertMsg = require('./directives/alertMsg');

angular.module('app', []);
angular.module('app').factory('clientAPIService',['$http',clientAPIService]);
angular.module('app').directive('maskTel',[maskTel]);
angular.module('app').directive('alertMsg',[alertMsg]);
angular.module('app').controller('MainController',['$scope','$http','clientAPIService',MainController]);
