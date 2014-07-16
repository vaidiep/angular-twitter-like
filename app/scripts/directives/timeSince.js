'use strict';

angular.module('TwitterApp')
  .directive('timeSince', ['$timeout', function ($timeout) {
    return {
      template: '<div class="timeSince">{{time}}</div>',
      restrict: 'E',
      scope: {
      	date: '='
      },
      link: function(scope, element, attrs) {

      	//Update time fuction
      	var updateTime = function() {
      		var curDate = new Date().getTime();
      		var difTime = Math.ceil((curDate - scope.date)/1000);

      		if (difTime >= 60) {
      			difTime = Math.ceil(difTime/60);
      			scope.time = difTime + ' minutes ago';
      		} else {
      			scope.time = difTime + ' seconds ago';
      		}
          
      		$timeout(updateTime, 500);
      	};

      	updateTime();

      }
    };
  }]);
