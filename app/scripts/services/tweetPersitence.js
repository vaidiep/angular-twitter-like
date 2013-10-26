'use strict';

angular.module('TwitterApp')
  .service('Tweetpersitence', function Tweetpersitence() {
  	//Get the user tweets from local storage
    this.get = function () {
    	var res = JSON.parse(localStorage.getItem('tweets'));
      	if (!res) {
      		return {}
      	} else {
      		return res;
      	}
    };

    //Set the user tweets to local storage
    this.set =  function (myTweets) {
      localStorage.setItem('tweets', JSON.stringify(myTweets));
    };
});
 
