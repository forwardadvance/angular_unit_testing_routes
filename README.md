# Part 11 - Route Testing

*TL;DR;*

To test your routes fully, you probably want to use Protractor for end to end testing in a browser. However, it's also useful to have unit tests for routes. 

Maybe you want to upgrade Angular, and you want to check that the routing API won't break your app.

Routes look like this:

```
angular.module('routes', [])
  .config( function($routeProvider) {
    console.log('routes');
    $routeProvider
      .when('/hello', {template: 'hello',   controller: 'helloController'})
      .when('/world', {template: 'world', controller: 'worldController'})
  });
```

I've used a template here, but you can use a templateUrl just as easily. The specs won't break.

To test this, we're going to explicity set the $location, digest the $rootScope, then check that that $route has the correct values.

```
describe('routes', () => {
  beforeEach(module('app'));

  var $route, $location, $rootScope
  beforeEach(inject(function(_$route_, _$location_, _$rootScope_) {
    $route = _$route_;
    $location = _$location_;
    $rootScope = _$rootScope_;
  }));

  it('should route to hello', function() {
    expect($route.current).toBeUndefined();
    $location.path('/hello');
    $rootScope.$digest();

    expect($route.current.template).toEqual('hello');
    expect($route.current.controller).toEqual('helloController');
  })

  it('should route to world', function() {
    $location.path('/world');
    $rootScope.$digest();

    expect($location.path()).toBe('/world');
    expect($route.current.template).toEqual('world');
    expect($route.current.controller).toEqual('worldController');
  });
});
```
