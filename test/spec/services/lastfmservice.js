'use strict';

describe('Service: lastFmService', function () {

  // load the service's module
  beforeEach(module('lastfmApp'));

  // instantiate service
  var lastFmService;
  beforeEach(inject(function (_lastFmService_) {
    lastFmService = _lastFmService_;
  }));

  it('should do something', function () {
    expect(!!lastFmService).toBe(true);
  });

});
