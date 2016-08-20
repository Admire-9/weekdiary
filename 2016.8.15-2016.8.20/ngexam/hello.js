(function($) {
    var hello = $.angular.module('hello', []);
    // hello.run(function($templateCache) {
    //     $templateCache.put("hello.html", "<div>Hello everyone!!</div>");
    // });
    hello.controller('MyCtrl', ['$scope', function($scope) {
        $scope.loadFnc = function() {
            $.console.log("数据正在加载中");
        };
    }]);
    hello.controller('MyCtrl2', ['$scope', function($scope) {
        $scope.loadFnc2 = function() {
            $.console.log("数据正在加载中...22222");
        };
    }]);
    hello.directive('loader', function() {
        // Runs during compile
        return {
            restrict: 'AE',
            link: function(scope, element, attr) {
                element.bind('mouseenter', function(event) {
                    /* Act on the event */
                    scope.$apply(attr.howtoload);
                });
            }
        };
    });
})(window);
