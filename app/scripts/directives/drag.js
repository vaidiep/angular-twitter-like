'use strict';

angular.module('TwitterApp')
  .directive('drag', ['$rootScope', function ($rootScope) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {

      	//Set attribute draggable to true to allow drag behavior on this element
      	attrs.$set('draggable', 'true');

      	//Drag start event
        element.bind('dragstart', function(e) {
        	element.addClass('isDrag');
        	$rootScope.dragData = attrs.drag;
        });

        //Drag end event
        element.bind('dragend', function() {
        	element.removeClass('isDrag');
        });
        
      }
    };
  }]);
