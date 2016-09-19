angular.module('Pokedex', [
  'List',
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
}])
.run(['$location', '$state', function ($location, $state) {
  $location.url('/home');
  $state.go('home');
}]);

