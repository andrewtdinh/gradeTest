'use strict';

angular.module('gradetest')
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {url: '/', templateUrl: '/views/general/home.html', controller: 'HomeCtrl'})
  .state('register', {url: '/register', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'})
  .state('login', {url: '/login', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'})
  .state('addGrade', {url: '/grades', templateUrl: '/views/grades/grades.html', controller: 'GradesCtrl'})
  .state('modGrade', {url: '/grades', templateUrl: '/views/grades/grades.html', controller: 'GradesCtrl'});
});
