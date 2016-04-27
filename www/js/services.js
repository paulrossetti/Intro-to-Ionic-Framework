angular.module('starter.services', [])

.factory('friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [{
    id: 0,
    name: 'Ben Sparrow',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return friends;
    },
    remove: function(friend) {
      chats.splice(chats.indexOf(friend), 1);
    },
    get: function(friendId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(friendId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
