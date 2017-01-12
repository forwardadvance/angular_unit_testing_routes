angular.module('routes', [])
  .config( function($routeProvider) {
    console.log('routes');
    $routeProvider
      .when('/hello', {template: 'hello',   controller: 'helloController'})
      .when('/world', {template: 'world', controller: 'worldController'})
  });
