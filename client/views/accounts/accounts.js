'use strict';

angular.module('angBank')
.controller('AccountsCtrl', function($scope, Account){
  var afUser = $scope.afUser = Account.init();
  afUser.$loaded().then(syncNames);

  $scope.addAccount = function(name){
    Account.add(name).then(syncNames);
    $scope.accountName = '';
  };

  $scope.delTransaction = function(tx, index){
    Account.delTransaction(tx, index);
  };

  $scope.addTransaction = function(name, tx){
    Account.addTransaction(name, tx);
    $scope.tx = {};
  };

  function syncNames(){
    $scope.names = afUser.names ? afUser.names.split(',') : [];
  }
});
