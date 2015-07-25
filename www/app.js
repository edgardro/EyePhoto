angular.module('galleryApp',[]).
    factory('DataSource', ['$http',function($http){
       return {
           get: function(fileName,callback){
                $http.get(fileName).
                success(function(data, status) {
                    callback(data);
                });
           }
       };
    }]);

var GalleryController = function($scope,DataSource) {
    var IMAGE_WIDTH = 405;
    $scope.IMAGE_LOCATION = "http://54.148.69.207/images/EyeGirls/";
    
    // Retrieve and set data 
    DataSource.get("js/girlsnew.json",function(data) {
        $scope.galleryData = data;
        $scope.selected = data[0];
    });
    
    // Scroll to appropriate position based on image index and width
    $scope.scrollTo = function(image,ind) {
        $scope.listposition = {left:(IMAGE_WIDTH * ind * -1) + "px"};
        $scope.selected = image;
    };
    $scope.go = function ( path ) {
  $location.path( path );
};
$scope.redirect = function(){
  window.location = "#/jsonartnewphoto.html";
}
};