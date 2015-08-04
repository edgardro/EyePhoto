angular.module('galleryApp',["ui.bootstrap"]).
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

var GalleryController = function($scope, $modal, DataSource) {
    var IMAGE_WIDTH = 405;
    $scope.IMAGE_LOCATION = "http://54.148.69.207/images/EyeGirls/";
    
    // Retrieve and set data 
    DataSource.get("js/girlsnew.json",function(data) {
        $scope.galleryData = data;
        $scope.selected = data[0];


           // initial image index
     $scope.currentIndex = 0;

        $scope.setCurrentSlideIndex = function (index) {
            $scope.currentIndex = index;
        };

        $scope.isCurrentSlideIndex = function (index) {
            return $scope.currentIndex === index;
        };

        $scope.prevSlide = function () {
            $scope.currentIndex = ($scope.currentIndex < $scope.galleryData.length - 1) ? ++$scope.currentIndex : 0;
        };

        $scope.nextSlide = function () {
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.galleryData.length - 1;
        };
    });
    
$scope.setCurrentImage = function (image) {
        $scope.currentImage = image;
    };
  //   $scope.showImages = function(index) {
  // $scope.activeSlide = index;
  // $scope.showModal('jsonartnewphoto1.html');

 $scope.showImages = function (index) {
    var modalInstance = $modal.open({
      templateUrl: 'modalview.html',
      controller: ModalInstanceCtrl,
      scope: $scope,
      // resolve: {
      //    item: function () {
      //       return item;
      //    }
      // }
    });
  };

var ModalInstanceCtrl = function ($scope, $modalInstance) {
// $scope.item = index;

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
  
};

};




    // Scroll to appropriate position based on image index and width
    // $scope.scrollTo = function(image,ind) {
    //     $scope.listposition = {left:(IMAGE_WIDTH * ind * -1) + "px"};
    //     $scope.selected = image;
    // };
//     $scope.go = function ( path ) {
//   $location.path( path );
// };


// var ModalDemoCtrl = function ($scope, $modal, $log) {

//   $scope.showImages = function (item) {
//     var modalInstance = $modal.open({
//       templateUrl: 'jsonartnewphoto1.html',
//       controller: ModalInstanceCtrl,
//       scope: $scope,
//       resolve: {
//          item: function () {
//             return item;
//          }
//       }
//     });
//   };
  
// };

// var ModalInstanceCtrl = function ($scope, $modalInstance, item) {
// $scope.item = item;

//   $scope.cancel = function () {
//     $modalInstance.dismiss('cancel');
//   };
  
// };