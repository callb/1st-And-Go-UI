(function(){
    angular
        .module("App")
        .config(Config);

    function Config($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "views/home.html",
                controller: "HomeController",
                controllerAs: "model"
            })
            .when("/player/:playerId", {
                templateUrl: "views/player.html",
                controller: "PlayerController",
                controllerAs: "model"
            })
            .otherwise({
                redirectTo: "/home"
            });
    }
})();