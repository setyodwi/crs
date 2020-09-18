(function () {
  "use strict";
  angular.module("MsgApp", []).controller("MsgController", MsgController);

  MsgController.$inject = ["$scope"];
  function MsgController($scope) {
    $scope.name = "juncak";
    $scope.situasi = "saja";
    $scope.sayMessage = function () {
      return "Ini dalam say messages";
    };

    $scope.seragaminOpa = function () {
      $scope.situasi = "stis";
    };
  }
})();
