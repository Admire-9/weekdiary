  //.controller('ChatsCtrl', function($scope, Chats) {
  //  // With the new view caching in Ionic, Controllers are only called
  //  // when they are recreated or on app start, instead of every page change.
  //  // To listen for when this page is active (for example, to refresh data),
  //  // listen for the $ionicView.enter event:
  //  //
  //  //$scope.$on('$ionicView.enter', function(e) {
  //  //});
  //
  //  $scope.chats = Chats.all();
  //  $scope.remove = function(chat) {
  //    Chats.remove(chat);
  //  };
  //})
  //修改后的文件如下
  define(['app'], function (app) {
    'use strict';
    function ctrl($scope, Chats) {
      //With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //
        //$scope.$on('$ionicView.enter', function(e) {
        //});

       //$scope.chats = Chats.all();原始的引用是这样的，下面是修改后的
      function successCallback(data){
        $scope.chats = data
      }
      function failCallback(error){
        console.log(error);
      }
      Chats.getAllData(successCallback,failCallback);
      //Chats.getAllData().then(function (data) {
      //  $scope.chats=data
      //}).finally(function () {
      //});
        $scope.remove = function(chat) {
          Chats.remove(chat);
        };
    }
    ctrl.$inject = ['$scope', 'Chats'];
    //return ctrl;
    app.registerController('ChatsCtrl',ctrl);
  });
