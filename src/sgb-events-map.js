'use strict';

angular.module('sgb-events-map', ['megazord'])
    .controller('sgb-events-map-controller', ['$scope', '_router', '_screen', '_screenParams','_data','appConstants', 
    	function ($scope, _router, _screen, _screenParams, _data, appConstants) {
        _screen.initialize($scope, _screenParams);
        $scope.map = _data.event;
        $scope.fullImagePath = appConstants.fullImagePath;  
    }]);