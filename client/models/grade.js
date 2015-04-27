'use strict';

angular.module('gradetest')
.factory('Grade', function($rootScope, $firebaseObject, $firebaseArray, $window){
  var fbUser;
  var afUser;

  function Grade(){
  }

  Grade.init = function(){
    fbUser = $rootScope.fbRoot.child('users/' + $rootScope.activeUser.uid);
    afUser = $firebaseObject(fbUser);
    return afUser;
  };

  Grade.delTransaction = function(tx, index){
    var fbTransactions = fbUser.child('accounts/' + tx.type);
    var afTransactions = $firebaseArray(fbTransactions);
    afTransactions.$loaded().then(function(){
      var foundTx = afTransactions[index];
      afTransactions.$remove(foundTx);
    });
  };

  Grade.addTransaction = function(name, tx){
    var transaction = angular.copy(tx);
    transaction.date = transaction.date.getTime();
    transaction.createdAt = $window.Firebase.ServerValue.TIMESTAMP;
    transaction.name = name;
    var fbTransactions = fbUser.child('accounts/' + tx.type);
    var afTransactions = $firebaseArray(fbTransactions);
    afTransactions.$add(transaction);
  };

  Grade.add = function(name){
    var names = afUser.names ? afUser.names.split(',') : [];
    names.push(name);

    afUser.names = names.join(',');
    return afUser.$save();
  };

  return Account;
});
