(function($) {
    var exam1 = $.angular.module('exam1', []);
    exam1
        .controller('EventController', ['$scope', function($scope) {
            $scope.count = 0;
            $scope.$on('MyEvent', function() {
                $scope.count++;
            });
        }]);
})(window);
