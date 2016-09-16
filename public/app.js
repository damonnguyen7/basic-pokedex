angular.module('Pokedex', [
  'SearchBar',
  'ui.router',
])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: './components/searchBar/searchBarView.html',
    controller: './components/searchBar/searchBarController'
  })
}])
.run(['$location', '$state', function ($location, $state) {
  $location.url('/home');
  $state.go('home');
}]);

