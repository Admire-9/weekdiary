angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, HotGameService, $ionicSlideBoxDelegate) {
    $scope.banner = [];
    HotGameService.getHotGameBanner().then(function(data) {
        console.log(data);
        if (!data || data.length === 0)
            return;
        $scope.banner = data;
        $ionicSlideBoxDelegate.$getByHandle("slideboximgs").loop(true);

        $ionicSlideBoxDelegate.update();
    })
    $scope.items = [];
    $scope.loadMore = function() {
        if ($scope.noMore === true)
            return;
        HotGameService.getData().then(function(data) {
            if (data.length == 0) {
                $scope.noMre = true;
            }
            Array.prototype.push.apply($scope.items, data);
        }).finally(function() {
            $scope.$broadcast('scroll.infiniteScrollComplete');
        });
    };
    $scope.doRefresh = function() {
        HotGameService.getDate(true).then(function(data) {
            $scope.items = [];
            if (data.length == 0) {
                $scope.noMore = true;
            } else {
                $scope.noMore = false;
            }
            Array.prototype.push.apply($scope.items, data);
        }).finally(function() {
            $scope.$broadcast('scroll.refreshComplete');
        })
    };
    $scope.getStarSrc = function(i, star) {
        var starSrc = {
            1: "http://test.lbwan.com/img/icon_star_on.png",
            2: "http://test.lbwan.com/img/icon_star_off.png",
            3: "http://test.lbwan.com/img/icon_star_half.png"
        }
        if (star >= i * 2) {
            return starSrc[1];
        } else if (star <= (i - 1) * 2) {
            return starSrc[2];
        } else if (star == i * 2 - 1) {
            return starSrc[3];
        }
    }
    $scope.loadMore();

})

.controller('ChatsCtrl', function($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
        Chats.remove(chat);
    };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
});
