angular.module('Pokedex', [
  'List',
  'ProfilePicture',
  'ui.router',
])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'components/list/listView.html',
    controller: 'ListController'
  })
  .state('home.selected', {
    url: '/home/{pokemonId}',
    templateUrl: 'components/profilePicture/profilePicture.html',
    controller: 'ProfilePicture'
  })
}])
.run(['$location', '$state', function ($location, $state) {
  $location.url('/home');
  $state.go('home');
}]);

