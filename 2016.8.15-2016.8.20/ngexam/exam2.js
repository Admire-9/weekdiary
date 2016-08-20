(function($) {
    var exam2 = $.angular.module('exam2', []);
    exam2
        .controller('HelloAngular', ['$scope', function($scope) {
            $scope.greeting = {
                text: "hello"
            };
        }]);
})(window);
