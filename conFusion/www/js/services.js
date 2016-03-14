'use strict';

angular.module('conFusion.services', ['ngResource'])

<<<<<<< HEAD
    .constant("baseURL","http://192.168.0.146:3000/")
=======
<<<<<<< HEAD
    .constant("baseURL","http://192.168.0.146:3000/")
=======
    .constant("baseURL","http://localhost:3000/")
>>>>>>> 65d4b7773de8c18568416dec36909d29e3a02b50
>>>>>>> dbcec7ec61890325a1c80b4232eaba9d54397014

//MenuFactory returns dishes resource
    .factory('menuFactory', ['$resource', 'baseURL', function($resource,baseURL) {
        
        return $resource(baseURL + "dishes/:id", null, {
                'update': {
                    method: 'PUT'
                }
            });
    }])

//Promotion Factory returns promotio resource

    .factory('promotionFactory', ['$resource', 'baseURL', function ($resource, baseURL) {
        return $resource(baseURL + "promotions/:id");
    }])
    
    .factory('corporateFactory', ['$resource', 'baseURL', function($resource,baseURL) {
        return $resource(baseURL+"leadership/:id");
    }])
    
    .factory('feedbackFactory', ['$resource', 'baseURL', function($resource,baseURL) {
        return $resource(baseURL+"feedback/:id");
    }])
    
<<<<<<< HEAD
.factory('favoriteFactory', ['$resource', 'baseURL', '$localStorage', function ($resource, baseURL,$localStorage) {
        var favFac = {};
   var favorites = []; 
       //$localStorage.getObject('favorites');
=======
    .factory('favoriteFactory', ['$resource', 'baseURL', '$localStorage', function ($resource, baseURL,$localStorage) {
        var favFac = {};
<<<<<<< HEAD
        var favorites = [];
        //$localStorage.getObject('favorites');
=======
        var favorites = $localStorage.getObject('favorites');
>>>>>>> 65d4b7773de8c18568416dec36909d29e3a02b50
>>>>>>> dbcec7ec61890325a1c80b4232eaba9d54397014
        favFac.addToFavorites = function (index) {
            for (var i = 0; i < favorites.length; i++)
            {
                if (favorites[i].id == index)
                    return;
            }
<<<<<<< HEAD
            favorites.push({id: index});
//          $localStorage.storeObject('favorites',favorites);
=======
            favorites.push({
                id: index
            });        $localStorage.storeObject('favorites',favorites);
>>>>>>> 65d4b7773de8c18568416dec36909d29e3a02b50
        };
        favFac.deleteFromFavorites = function (index) 
        {
            for (var i = 0; i < favorites.length; i++) 
            {
                if (favorites[i].id == index) {
                    favorites.splice(i, 1);
<<<<<<< HEAD
//                    $localStorage.storeObject('favorites', favorites);
=======
                $localStorage.storeObject('favorites', favorites);
>>>>>>> 65d4b7773de8c18568416dec36909d29e3a02b50
                }
            }
        }
        favFac.getFavorites = function () {
            return favorites;
        };
        return favFac;
    }])

.factory('$localStorage', ['$window', function($window) {
  return {
    store: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    storeObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key,defaultValue) {
      return JSON.parse($window.localStorage[key] || defaultValue);
    }
  }
}]);