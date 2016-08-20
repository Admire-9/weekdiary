(function($) {
    var myApp = angular.module('myApp', []);
    myApp.directive('superman', function() {
        // Runs during compile
        return {
            scope: {},
            restrict: 'AE',
            controller: function($scope) {
                $scope.abilities = [];
                this.addStrength = function() {
                    $scope.abilities.push("strength");
                };
                this.addSpeed = function() {
                    $scope.abilities.push("speed");
                };
                this.addLight = function() {
                    $scope.abilities.push("light");
                };
            },
            link: function(scope, iElm, iAttrs, controller) {
                iElm.addClass('btn btn-primay');
                iElm.bind("mouseenter", function() {
                    console.log(scope.abilities);
                });
            }
        };
    });
    myApp.directive("strength", function() {
        return {
            require: '^superman',
            link: function(scope, iElm, iAttrs, supermanCtrl) {
                supermanCtrl.addStrength();
            }
        };
    });
    myApp.directive("speed", function() {
        return {
            require: '^superman',
            link: function(scope, iElm, iAttrs, supermanCtrl) {
                supermanCtrl.addSpeed();
            }
        };
    });
    myApp.directive("light", function() {
        return {
            require: '^superman',
            link: function(scope, iElm, iAttrs, supermanCtrl) {
                supermanCtrl.addLight();
            }
        };
    });
})(window);
