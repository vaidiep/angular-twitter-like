'use strict';

angular.module('TwitterApp')
  .service('Tweetpersitence', ['Notifications', function Tweetpersitence(Notifications) {
  	//Init
  	this.tweets = JSON.parse(localStorage.getItem('tweets'));
  	if (this.tweets === null) {
  		this.tweets = {};
  	}

  	//Get the user tweets from local storage
    this.getTweets = function () {
    	return this.tweets
    };

    //Get the user tweets from local storage
    this.getTweet = function (tweetId) {
    	return this.tweets[tweetId];
    };

    this.addTweet = function(message) {
    	//Get an id
    	var id = new Date().getTime();

    	//Create and add the tweet
    	var tweet = {
    		'id': id,
    		'message': message
    	};
    	this.tweets[id] = tweet;

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
    	delete this.tweets[tweetId];

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
      localStorage.setItem('tweets', JSON.stringify(this.tweets));
    };

    //Get the number of tweets
    this.countTweets = function () {
    	return Object.keys(this.tweets).length;
    }

}]);
 
