'use strict';

angular.module('gradetest')
.controller('HomeCtrl', function($scope, $rootScope, $state){
  console.info('$rootScope.activeUser', $rootScope.activeUser);
  if ($rootScope.activeUser) {
    $state.go('grades');
  }
});
