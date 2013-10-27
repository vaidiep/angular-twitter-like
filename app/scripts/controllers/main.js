'use strict';

angular.module('TwitterApp')
  .controller('MainCtrl', ['$scope', 'Tweetpersitence', 'Notifications', function ($scope, Tweetpersitence, Notifications) {

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

    	//Save Tweets
    	Tweetpersitence.set($scope.myTweets);

    	//Add notifications
    	Notifications.add(
    		'Tweet added: "' + $scope.newMessage + '"', 
    		function() {
    			$scope.removeTweet(id);
    		}
    	);

    	//Empty message
    	$scope.newMessage = '';
    }

    $scope.removeTweet = function(tweetId) {
    	//Get the tweet
    	var tweet = $scope.myTweets[tweetId];

    	//Remove the tweet
    	delete $scope.myTweets[tweetId];

    	//Save Tweets
    	Tweetpersitence.set($scope.myTweets);

    	//Add notifications
    	Notifications.add(
    		'Tweet deleted: "' + tweet.message + '"', 
    		function() {
    			//Add tweet
    			$scope.myTweets[tweet.id] = tweet;
    			//Save Tweets
    			Tweetpersitence.set($scope.myTweets);
    		}
    	);
    }

  }]);
