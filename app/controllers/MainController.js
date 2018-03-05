module.exports = function ($scope, $http,clientAPIService) {
    $scope.name = "My Pizza";
    $scope.clients = [];
    $scope.msg = "";
    let urlApi = 'http://localhost/Eduardo/_angularjs/aulas/server/post.php';

    let listClients = function () {
        clientAPIService.getClients()
            .then(function (response) {
                $scope.clients = response.data;
            })
    };
    let addClients = function (client) {
        clientAPIService.saveClient(client)
            .then(function (data) {
                console.log(data);
                listClients();
            });
    };
    let destroyClients = function (client) {
        client.delete = true;
        clientAPIService.saveClient(client).then(function () {
            listClients();
        });
    };

    listClients();

    $scope.add = function (client) {
        addClients(angular.copy(client));
        $scope.formClient.$setPristine();
        delete $scope.client;
        $scope.msg = "Successfully added record";

    };
    $scope.edit = function (client) {
        $scope.client = client;
        $scope.editing = true;
        $scope.msg = "";
    };
    $scope.save = function () {
        addClients(angular.copy($scope.client));
        $scope.formClient.$setPristine();
        delete $scope.client;
        $scope.editing = false;
        $scope.msg = "Successfully edited record";
    };
    $scope.destroy = function (client) {
        $scope.clients.splice($scope.clients.indexOf(client), 1);
        destroyClients(client);
        $scope.msg = "Successfully deleted record";

    };
    $scope.orderBy = function (col) {
        $scope.order = col;
        $scope.reverse = !$scope.reverse;
    };
};