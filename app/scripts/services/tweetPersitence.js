'use strict';

angular.module('TwitterApp')
  .service('Tweetpersitence', ['Notifications', function Tweetpersitence(Notifications) {
  	//Init
  	var tweets = JSON.parse(localStorage.getItem('tweets'));
  	if (tweets === null) {
  		tweets = {};
  	}

  	//Get the user tweets from local storage
    this.getTweets = function () {
    	return tweets
    };

    //Get the user tweets from local storage
    this.getTweet = function (tweetId) {
    	return tweets[tweetId];
    };

    this.addTweet = function(message) {
    	//Get an id
    	var id = new Date().getTime();

    	//Create and add the tweet
    	var tweet = {
    		'id': id,
    		'message': message
    	};
    	tweets[id] = tweet;

    	//Save Tweets
    	this.save();

    	//Add notifications
    	var self = this;
    	Notifications.add(
    		'added',
    		'Tweet added: "' + message + '"', 
    		function() {
    			//Remove tweet
    			self.removeTweet(id);
    		}
    	);
    }

    this.removeTweet = function(tweetId) {
    	//Get the tweet
    	var tweet = this.getTweet(tweetId);

    	//Remove the tweet
    	delete tweets[tweetId];

    	//Save Tweets
    	this.save();

    	//Add notifications
    	var self = this;
    	Notifications.add(
    		'deleted',
    		'Tweet deleted: "' + tweet.message + '"', 
    		function() {
    			//Add tweet
    			self.addTweet(tweet.message)
    		}
    	);
    }

    //Set the user tweets to local storage
    this.save =  function () {
      localStorage.setItem('tweets', JSON.stringify(tweets));
    };

    //Get the number of tweets
    this.countTweets = function () {
    	return Object.keys(tweets).length;
    }

}]);
 
