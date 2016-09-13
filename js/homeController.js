angular.module('zenPaintApp')
.controller('homeController', function($scope, service){


  $scope.canvasInit = function(){
    return service.canvasInit();
  }
  $scope.canvasInit();

  $scope.brushes = service.brushes;

  $scope.brush = function(b){
    return service[b]();
  }
  $scope.brush('brush1');




})
