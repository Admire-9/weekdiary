(function($) {
    var myApp = $.angular.module('myApp', []);
    myApp.controller('MyCtrl', ['$scope', function($scope) {
        $scope.ctrlFlavor = "百威";
    }]);
    myApp.directive('drink', function() {
        // Runs during compile
        return {
            restrict: 'AE',
            template: "<div>{{flavor}}</div>",
            link: function(scope, iElm, iAttrs, controller) {
                scope.flavor = iAttrs.flavor;
            }
        }
    });
})(window);
