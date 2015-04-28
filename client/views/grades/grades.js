'use strict';

angular.module('gradetest')
.controller('GradesCtrl', function($scope, Grade, $state){
  $scope.name = $state.current.name;
  var afUser = $scope.afUser = Grade.init();
  afUser.$loaded().then(syncNames);

  $scope.addClass = function(name){
    Grade.add(name).then(syncNames);
    $scope.className = '';
  };

  $scope.delGrade = function(tx, index){
    Grade.delTransaction(tx, index);
  };

  $scope.addGrade = function(action, grade){
    Grade.addTransaction(action, grade);
    $scope.tx = {};
  };

  function syncNames(){
    $scope.names = afUser.names ? afUser.names.split(',') : [];
  }
});
