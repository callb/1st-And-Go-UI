(function(){
    angular
        .module("App")
        .factory("SearchService", SearchService);

    function SearchService($http) {

        var api = {
            searchPlayersByText : searchPlayersByText,
        };
        return api;


        function searchPlayersByText(searchText) {
            var host = "http://localhost:8000";
            var url = host+ "/api/search/player/" + searchText;
            return $http.get(url)
        }

    }
})();