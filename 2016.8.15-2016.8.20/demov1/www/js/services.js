angular.module('starter.services', [])

.factory('Chats', function() {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var chats = [{
            id: 0,
            name: 'Ben Sparrow',
            lastText: 'You on your way?',
            face: 'img/ben.png'
        }, {
            id: 1,
            name: 'Max Lynx',
            lastText: 'Hey, it\'s me',
            face: 'img/max.png'
        }, {
            id: 2,
            name: 'Adam Bradleyson',
            lastText: 'I should buy a boat',
            face: 'img/adam.jpg'
        }, {
            id: 3,
            name: 'Perry Governor',
            lastText: 'Look at my mukluks!',
            face: 'img/perry.png'
        }, {
            id: 4,
            name: 'Mike Harrington',
            lastText: 'This is wicked good ice cream.',
            face: 'img/mike.png'
        }];

        return {
            all: function() {
                return chats;
            },
            remove: function(chat) {
                chats.splice(chats.indexOf(chat), 1);
            },
            get: function(chatId) {
                for (var i = 0; i < chats.length; i++) {
                    if (chats[i].id === parseInt(chatId)) {
                        return chats[i];
                    }
                }
                return null;
            }
        };
    })
    .factory('HotGameService', function($http, $timeout, $q) {
        var getHotGameBanner = function() {
            var deferred = $q.defer();
            var data = [];
            var url = "http://test.lbwan.com:18080/lbopen/channel/getAdvertisingList.json?channelId=37&callback=JSON_CALLBACK"
            $http.jsonp(url).success(function(response) {
                var resData = response.data.rows;
                for (var key = 0; key <= 2; key++) {
                    resData[key].image = 'http://test.lbwan.com/res/' + resData[key].image;
                    data.push(resData[key].image)
                }
                deferred.resolve(data);
                console.log(response);
            }).error(function(error) {
                console.log(error);
            });
            return deferred.promise;
        }
        var page = 1;
        var rows = 4;
        var getData = function(bool) {
            if (bool === true) {
                page = 1;
            }
            /* Spoof a network call using promises*/
            var deferred = $q.defer();
            var data = [];
            var url = 'http://test.lbwan.com:18080/lbopen/channel/getAllMakeGameListName.json?channelId=37';
            url += "&currentPage=";
            url += page;
            url += "&pageSize=";
            url += rows;
            url += "&callback=JSON_CALLBACK";

            $http.jsonp(url).success(function(response) {
                console.log(response);
                data = response.data.rows;
                for (var key in data) {
                    data[key].icon = "http://test.lbwan.com/res/" + data[key].icon;
                }
                console.log(data);
                page++;
            }).error(function(error) {
                console.log(error);
            });

            $timeout(function() {
                // success response!
                deferred.resolve(data);
            }, 1000);
            return deferred.promise;
        }
        return {
            getHotGameBanner: getHotGameBanner,
            getData: getData
        }
    })
