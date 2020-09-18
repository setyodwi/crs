(function () {
  "use strict";

  angular
    .module("myFirstApp", [])

    .controller("MyFirstController", function ($scope) {
      $scope.name = "setyo";
      $scope.sayHello = function () {
        return "Hai Manis!";
      };
    });
})();
