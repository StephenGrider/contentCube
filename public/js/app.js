var flintify =  angular.module('flintify',['ngRoute'])


flintify.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        controller: 'homeCtrl'
      }).
      when('/products', {
        templateUrl: 'templates/products.html',
        controller:'productsCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);



flintify.controller('productsCtrl',function($scope, rotateService){

  // (function(){
  //   console.log('initial setup')
  // })()



});

flintify.controller('homeCtrl',function($scope, setup, rotateService){

  (function(){

    setup(document.getElementById('origin'),'origin');
    setup(document.getElementById('front'),'front');
    setup(document.getElementById('right'),'right');
    setup(document.getElementById('left'),'left');
    setup(document.getElementById('back'),'back');
    setup(document.getElementById('top'),'top');
    setup(document.getElementById('bottom'),'bottom');
    setup(document.getElementById('origin'),'originFinal');



  })()

  $scope.right = function(){
    rotateService('right')
  }
  $scope.left = function(){
    rotateService('left')
  }
  $scope.up = function(){
    rotateService('up')
  }
  $scope.down = function(){
    rotateService('down')
  }

});


