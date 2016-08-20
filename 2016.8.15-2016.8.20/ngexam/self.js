(function($) {
    var myApp = $.angular.module('myApp', []);
    myApp.directive('expander', function() {
        return {
            restrict: 'EA',
            replace: true,
            transclude: true,
            scope: {
                title: '=expanderTitle'
            },
            template: '<div>' + '<div class="title" ng-click="toggle()">{{title}}</div>' + '<div class="body" ng-show="showMe" ng-transclude></div>' + '</div>',
            link: function(scope, element, attrs) {
                scope.showMe = false;
                scope.toggle = function() {
                    scope.showMe = !scope.showMe;
                }
            }
        }
    });
    myApp.controller('SomeController', ['$scope', function($scope) {
        $scope.title = '点击展开';
        $scope.text = '这是里面的内容';
    }])
})(window)
