casinoWar.controller('themeMe', function($http) {


  self.userSignUp = function(email, password, password_confirmation) {
    var newUser = { 'email': email, 'password': password, 'password_confirmation': password_confirmation };
    $http.post('localhost:3000/users', newUser, 'POST').then(function successCallback(response){
      var data = angular.fromJson(response).data;
      console.log(data)
      // $cookies.put('currentUser', user_id);
      // $state.go('setsong');
   });
  };

});
