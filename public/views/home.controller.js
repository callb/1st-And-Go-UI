(function(){
    angular
        .module("App")
        .controller("HomeController", HomeController);

    function HomeController(SearchService) {

        var vm = this;
        vm.searchForPlayers = searchForPlayers;
        vm.players = 1;


        function searchForPlayers(searchText) {
            SearchService
                .searchPlayersByText(searchText)
                .then(
                    function (response) {
                        vm.players = response.data;
                    },
                    function(error) {
                        vm.error = error
                    }
                )
        }

    }

})();