angular.module('galleryApp',['ngAnimate', 'ngTouch']).
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
    // var IMAGE_WIDTH = 405;
    $scope.IMAGE_LOCATION = "http://54.148.69.207/images/EyeGirls/";
    
    // Retrieve and set data 
    DataSource.get("js/girlsnew.json",function(data) {
        $scope.galleryData = data;
        $scope.selected = data[0];

          // initial image index
    $scope._Index = 0;

    // if a current image is the same as requested image
    $scope.isActive = function (index) {
        return $scope._Index === index;
    };

    // show prev image
    $scope.showPrev = function () {
        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.galleryData.length - 1;
    };

    // show next image
    $scope.showNext = function () {
        $scope._Index = ($scope._Index < $scope.galleryData.length - 1) ? ++$scope._Index : 0;
    };

    // show a certain image
    $scope.showPhoto = function (index) {
        $scope._Index = index;
    };
    });
    
    // Scroll to appropriate position based on image index and width
    $scope.scrollTo = function(image,ind) {
        $scope.listposition = {left:(IMAGE_WIDTH * ind * -1) + "px"};
        $scope.selected = image;
    };
    $scope.go = function ( path ) {
  $location.path( path );
};
};