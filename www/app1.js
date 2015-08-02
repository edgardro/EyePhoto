angular.module('plunker', ['ui.bootstrap']);
var ModalDemoCtrl = function ($scope, $modal, $log) {

  $scope.open = function (item) {
    var modalInstance = $modal.open({
      templateUrl: 'template.html',
      controller: ModalInstanceCtrl,
      scope: $scope,
      resolve: {
         item: function () {
            return item;
         }
      }
    });
  };
  
};

var ModalInstanceCtrl = function ($scope, $modalInstance, item) {
$scope.item = item;

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
  
};