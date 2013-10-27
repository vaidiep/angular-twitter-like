'use strict';

angular.module('TwitterApp')
  .controller('MainCtrl', ['$scope', 'Tweetpersitence', function ($scope, Tweetpersitence) {

    //My list of tweets
    $scope.myTweets = Tweetpersitence.get()

    //New Message Model
    $scope.newMessage = "";

    $scope.addTweet = function() {
    	//Get an id
    	var id = new Date().getTime();

    	//Create and add the tweet
    	var tweet = {
    		'id': id,
    		'message': $scope.newMessage
    	};
    	$scope.myTweets[id] = tweet;

    	//Empty message
    	$scope.newMessage = '';

    	//Save Tweets
    	Tweetpersitence.set($scope.myTweets);
    }

    $scope.removeTweet = function(tweetId) {
    	//Remove the tweet
    	delete $scope.myTweets[tweetId];

    	//Save Tweets
    	Tweetpersitence.set($scope.myTweets);
    }
    
  }]);
