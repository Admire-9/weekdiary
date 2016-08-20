(function($) {
    var myApp = $.angular.module('myApp', []);
    myApp
        .controller('GreetCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
            $scope.name = "World";
            $rootScope.deparment = "Angular";
        }])
        .controller('ListCtrl', ['$scope', function($scope) {
            $scope.names = ['Igor', 'Misko', 'Vojita'];
        }]);

})(window);
