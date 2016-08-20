angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$ionicSlideBoxDelegate,ClassService) {
    //初始化
    $scope.firstClass = ClassService.getFirstClass();
    $scope.secondClass = ClassService.getSecondClass($scope.firstClass[0].name);
    $scope.thirdClass = ClassService.getThirdClass($scope.secondClass[0].name);
    $scope.text = $scope.thirdClass[0].name;
    $scope.slideIndex = 0;
    $scope.slideSecondIndex = 0;
    $scope.slideThirdIndex = 0;


    $scope.firstClick = function (index,item,event) {
      $scope.slideIndex = index;
      $scope.secondClass = ClassService.getSecondClass(item.name)
      $scope.slideSecondIndex = 0;
      $scope.thirdClass = ClassService.getThirdClass($scope.secondClass[0].name);
      $scope.slideThirdIndex = 0
      $scope.text = $scope.thirdClass[0].name;
      //event.target.style.border = "2px solid blue"
    };
    $scope.secondClick = function (index,item){
      $scope.slideSecondIndex = index;
      $scope.thirdClass = ClassService.getThirdClass(item.name);
    }
    $scope.thirdClick = function (index,item) {
      $scope.slideThirdIndex = index;
      $scope.text = item.name;
    }
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
