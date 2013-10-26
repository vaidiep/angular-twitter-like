'use strict';

angular.module('TwitterApp')
  .directive('drop', ['$rootScope', function ($rootScope) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
      	//Drag enter event
       	element.bind('dragenter', function() {
       		element.addClass('dragEnter');
       	});

       	//Drag leave event
       	element.bind('dragleave', function() {
       		element.removeClass('dragEnter');
       	});

       	//Drag over event
       	element.bind('dragover', function(e) {
       		e.preventDefault();
       		return false;
       	});

       	//Drop event
      	element.bind('drop', function() {
      		//Call the given function
      		var fn = scope.$eval(attrs.drop);
       		fn($rootScope.dragData);
      		scope.$apply();

       		element.removeClass('dragEnter');
       	});
      }
    };
  }]);
