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
