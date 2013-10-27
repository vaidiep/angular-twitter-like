'use strict';

angular.module('TwitterApp')
  .controller('NotificationsCtrl', ['$scope', 'Notifications', function ($scope, Notifications) {

  	//List of notifiations
    $scope.notifications = Notifications.list;

    
  }]);
