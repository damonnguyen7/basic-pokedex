angular.module('Pokedex', [
  'Pokedex.List',
  'Pokedex.ProfilePicture',
  'ui.router',
])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      views: {
        'list': {
          templateUrl: 'components/list/listView.html',
          controller: 'ListController'
        },
        'profilePicture': {
          templateUrl: 'components/profilePicture/profilePicture.html',
          controller: 'ProfilePicture'
        }
      }
    })
}])
  