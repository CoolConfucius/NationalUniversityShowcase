'use strict'; 

var app = angular.module('myApp', ['ui.router']); 

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {url: '/', templateUrl: './html/home.html' })
    .state('tpes', {url: '/tpes', templateUrl: './html/tpes.html' })

    .state('itl520academictexts', {url: '/itl520academictexts', templateUrl: './html/artifacts/itl520academictexts.html' })
    .state('itl520contentareathinking', {url: '/itl520contentareathinking', templateUrl: './html/artifacts/itl520contentareathinking.html' })
    
    .state('itl522pbl', {url: '/itl522pbl', templateUrl: './html/artifacts/itl522pbl.html' })
    .state('itl522teaching', {url: '/itl522teaching', templateUrl: './html/artifacts/itl522teaching.html' })
    
    .state('itl600comparativeessay', {url: '/itl600comparativeessay', templateUrl: './html/artifacts/itl600comparativeessay.html' })
    
    .state('itl602maindish', {url: '/itl602maindish', templateUrl: './html/artifacts/itl602maindish.html' })
    
    .state('itl606classroommanagement', {url: '/itl606classroommanagement', templateUrl: './html/artifacts/itl606classroommanagement.html' })
    .state('itl606signatureassignment', {url: '/itl606signatureassignment', templateUrl: './html/artifacts/itl606signatureassignment.html' })

    .state('itl608literacylearningplan', {url: '/itl608literacylearningplan', templateUrl: './html/artifacts/itl608literacylearningplan.html' })
    .state('itl608signatureassignment', {url: '/itl608signatureassignment', templateUrl: './html/artifacts/itl608signatureassignment.html' })    

    // .state('developer', {url: '/developer', templateUrl: './html/developer.html' })
    .state('resume', {url: '/resume', templateUrl: './html/resume.html' })
    // .state('blog', {url: '/blog', templateUrl: './html/blog.html' })
  
  $urlRouterProvider.otherwise('/'); 
});

app.controller('mainCtrl', function($scope) {

  console.log("mainCtrl");
  $scope.lightsout = false; 
  $scope.toggle = function(){
    $scope.lightsout = !$scope.lightsout; 
  }

  $scope.hidedeets = true; 
  $scope.toggledeets = function(){
    $scope.hidedeets = !$scope.hidedeets; 
  }

  $scope.allprojects = false; 
  $scope.toggleprojects = function(){
    $scope.allprojects = !$scope.allprojects; 
  }
  
  $scope.gototop = function(){
    console.log("gototop");
    document.documentElement.scrollTop = 0;
  }

}); 