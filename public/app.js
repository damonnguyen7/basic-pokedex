angular.module('Pokedex', [
  'Pokedex.Home',
  'Pokedex.ProfilePicture',
  'ui.router',
])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  // $urlRouterProvider.otherwise('/home');
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'components/home/homeView.html',
      controller: 'HomeController'
    })
    .state('profilePicture', {
      url: '/',
      templateUrl: 'components/profilePicture/profilePicture.html',
      controller: 'ProfilePictureController'
    })
    //if pokemon not selected
    .state('notSelected', {
      url: '/stats',
      templateUrl: 'partials/pleaseSelectPokemon.html',
    })
    //else if selected

}])
  