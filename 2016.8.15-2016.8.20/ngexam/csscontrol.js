(function($) {
    var csscontrolApp = $.angular.module('csscontrolApp', []);
    csscontrolApp
        .controller('csscontrol', ['$scope', function($scope) {
            $scope.color = "red";
            $scope.setColor = function() {
                $scope.color = "green";
            };
        }]);
})(window);
