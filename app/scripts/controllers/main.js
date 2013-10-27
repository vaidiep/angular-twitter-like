'use strict';

angular.module('TwitterApp')
  .controller('MainCtrl', ['$scope', 'Tweetpersitence', function ($scope, Tweetpersitence) {

    //My list of tweets
    $scope.myTweets = Tweetpersitence.getTweets()

    //New Message Model
    $scope.newMessage = "";

    $scope.addTweet = function() {
    	//Add the tweet
    	Tweetpersitence.addTweet($scope.newMessage)

    	//Empty message
    	$scope.newMessage = '';
    }

    $scope.removeTweet = function(tweetId) {
    	//Remove the tweet
    	Tweetpersitence.removeTweet(tweetId);
    }

  }]);
