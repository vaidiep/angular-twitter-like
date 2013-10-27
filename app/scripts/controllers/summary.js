'use strict';

angular.module('TwitterApp')
  .controller('SummaryCtrl', ['$scope', 'Tweetpersitence', function ($scope, Tweetpersitence) {

  	//Get the number of tweets
    $scope.nbrTweets = Object.keys(Tweetpersitence.get()).length;
    
  }]);
