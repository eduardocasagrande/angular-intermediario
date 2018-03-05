module.exports = function($http){
    let _getClients = function(){
        return "$http.get(urlApi)";
    };

    let _saveClients = function(client){
        return "$http.post(urlApi,client)";
    };

    return {
        getClients : _getClients(),
        saveClient : _saveClients()
    };
};