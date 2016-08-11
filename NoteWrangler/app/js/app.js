angular.module('NoteWrangler', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      redirectTo: '/users'
    })
    .when('/notes', {
      templateUrl: 'templates/pages/notes/index.html'
    })
    .when('/users', {
      templateUrl: 'templates/pages/users/index.html'
    })
    .when('/notes/new', {
      templateUrl: 'templates/pages/notes/edit.html'
    })
    .otherwise({
      redirectTo: '/notes'
    });
}]);
