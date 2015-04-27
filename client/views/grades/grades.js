'use strict';

angular.module('gradetest')
.controller('GradesCtrl', function($scope, Grade){
  var afUser = $scope.afUser = Grade.init();
  afUser.$loaded().then(syncNames);

  $scope.addClass = function(name){
    Grade.add(name).then(syncNames);
    $scope.className = '';
  };

  $scope.delGrade = function(tx, index){
    Grade.delTransaction(tx, index);
  };

  $scope.addGrade = function(name, tx){
    Grade.addTransaction(name, tx);
    $scope.tx = {};
  };

  function syncNames(){
    $scope.names = afUser.names ? afUser.names.split(',') : [];
  }
});
