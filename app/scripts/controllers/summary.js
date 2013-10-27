'use strict';

angular.module('TwitterApp')
  .controller('SummaryCtrl', ['$scope', 'Tweetpersitence', function ($scope, Tweetpersitence) {

  	//Get the tweets
    $scope.tweets = Tweetpersitence;

  }]);
