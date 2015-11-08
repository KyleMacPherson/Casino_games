casino.controller('casinoController', function($http) {

  self.email = 'undef'

  self.get = function() {
     $http({
       method: 'GET',
       url: '/users'
     }).then(function successCallback(response) {
       var data = angular.fromJson(response.data);
       self.email = data.email;
     });
   };

});
