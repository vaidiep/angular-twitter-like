'use strict';

angular.module('TwitterApp')
  .factory('Notifications', function ($timeout) {
    var service = {
        list: {},
        add: function (classes, text, undo) {
            var timestamp = (new Date()).getTime();

            //Add to the list of notifications
            service.list[timestamp] = {
            	'classes' : classes,
                'text': text,
                'canUndo': function () {
                    return angular.isFunction(undo);
                },
                'undo': function () {
                    if (angular.isFunction(undo)) {
                        delete service.list[timestamp];
                        undo();
                    }
                }
            };

            //Remove after a while
            $timeout(function () {
                delete service.list[timestamp];
            }, 5000);
        }
    };
    return service;
});