angular.module('NoteWrangler')
.controller('NotesShowController', ['$routeParams', '$http', function($routeParams, $http) {
  var controller = this;
  $http({
    method: 'GET',
    url: '/notes/' + $routeParams.id,
    data: 'note'
  }).success(function(data){
    controller.note = data;
   });
}]);
