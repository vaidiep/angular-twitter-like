'use strict';

describe('Service: Tweetpersitence', function () {

  // load the service's module
  beforeEach(module('TwitterApp'));

  // instantiate service
  var Tweetpersitence;
  beforeEach(inject(function(_Tweetpersitence_) {
    Tweetpersitence = _Tweetpersitence_;
  }));

  it('should do something', function () {
    expect(!!Tweetpersitence).toBe(true);
  });

});
