(function(){
'use strict';

angular.module('myfirstApp',[])

.controller('myfirstController',function($scope){
$scope.name = "wlk";
$scope.sayHello = function(){
  return "hello Coursera!";
};
});

})();
