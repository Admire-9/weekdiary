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
.factory('ClassService', function () {
    function getFirstClass(){
      var firstClass = [
        {id:1,name:"A1"},
        {id:2,name:"A2"},
        {id:3,name:"A3"},
        {id:4,name:"A4"},
        {id:5,name:"A5"}
      ]
      return firstClass;
    }
    function getSecondClass (firstClassName){
      var secondClass = [
        {id:1,name:firstClassName+"B1"},
        {id:2,name:firstClassName+"B2"},
        {id:3,name:firstClassName+"B3"},
        {id:4,name:firstClassName+"B4"},
        {id:5,name:firstClassName+"B5"},
      ]
      return secondClass;
    }
    function getThirdClass (secondClassName){
      var thirdClass = [
        {id:1,name:secondClassName+"C1"},
        {id:2,name:secondClassName+"C2"},
        {id:3,name:secondClassName+"C3"},
        {id:4,name:secondClassName+"C4"},
        {id:5,name:secondClassName+"C5"}
      ]
      return thirdClass
    }
    return{
      getFirstClass:getFirstClass,
      getSecondClass:getSecondClass,
      getThirdClass:getThirdClass
    }
  });
