/**
 * Created by Donny on 17/3/22.
 */
(function () {
    'use strict';

    angular.module('emergency.controllers', [])
        .controller('AppController', ['$scope', '$rootScope', function ($scope, $rootScope) {
            $scope.toggleFullScreen = function () {
                $rootScope.isFullscreen = !$rootScope.isFullscreen;
            }
        }])
}());