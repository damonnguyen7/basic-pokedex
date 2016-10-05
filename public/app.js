angular.module('Pokedex', [
  'Pokedex.List',
  'Pokedex.ProfilePicture',
  'Pokedex.Navbar',
  'ui.router',
])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  $stateProvider
    .state('home', {
      url: '/home',
      views: {
        'list': {
          templateUrl: 'components/list/listView.html',
          controller: 'ListController'
        },
        'profilePicture': {
          templateUrl: 'components/profilePicture/profilePicture.html',
          controller: 'ProfilePictureController'
        },
        'navbar': {
          templateUrl: 'components/navbar/navbarView.html',
          controller: 'NavbarController'
        }
      }
    })
}])
  