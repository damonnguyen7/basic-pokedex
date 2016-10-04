(function() {
  'use strict';

  angular.module('Pokedex', [
    'Pokedex.List',
    'Pokedex.ProfilePicture',
    'ui.router',
  ])

  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    // $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'components/list/listView.html',
      controller: 'ListController'
    })
    .state('home.selected', {
      url: '/selected/:contactId',
      templateUrl: 'components/profilePicture/profilePicture.html',
      controller: 'ProfilePicture'
    })
  }])
  .run(['$location', '$state', function ($location, $state) {
    $location.url('/home');
    $state.go('home');
  }]);
  
})();

