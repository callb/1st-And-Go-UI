(function(){
    angular
        .module("App")
        .controller("HomeController", HomeController);

    function HomeController(SearchService) {

        var vm = this;
        vm.searchForPlayers = function(searchText) {
            SearchService
                .searchPlayersByText(searchText)
                .then(
                    function (players) {
                        vm.players = players
                    },
                    function(error) {
                        vm.error = error
                    }
                )

        }

    }

})();