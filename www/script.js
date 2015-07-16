//create a module myApp
var myApp = angular.module('myApp', ['ngRoute']);
 
//Now Configure  our  routing
myApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
    // set route for the index page
    .when('/',
    {
        controller: 'RouteCtrl',
        templateUrl: 'uirouter.html'
    })
     // if not match with any route config then send to home page
 
     .otherwise({
        redirectTo: '/home'
      });
 
 
});
 
// create the controller and inject Angular's $scope
 
  // set for Route Controller
  myApp.controller('RouteCtrl', function($scope) {
   
   /** create $scope.template **/
   $scope.template={
     
     
     "about":"aboutus.html",
     "myart":"myart.html", 
     "boysart":"boysart.html",
     "girlsart":"girlsart.html",
     "collectionart":"collectionart.html",
     "art":"art.html",
     "interior":"interior.html",
     "exhibitions":"exhibitions.html",
     "travel":"travel.html",
     "video":"video.html"
     
   }
   
   /** now after this ng-include in uirouter.html set and take template from their respective path **/
    


  })

   
      // var myApp = angular.module('myApp', []);
      myApp.controller('CountryListCtrl', function ($scope, $http){
        $http.get('countries.json').success(function(data) {
          // $scope.countries = data[0];
          $scope.countries = data.countries;

        
        });
      });
    


;

  
  