angular.module('starter.controllers', [])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function () {
        $scope.closeLogin();
      }, 1000);
    };
  })

  .controller('MainMapCtrl', function ($scope,$ionicModal) {

    // $scope.locations = LocationsService.savedLocations;
    angular.extend($scope, {

      center: {
        lat: 18.23931,
        lng: -66.0770616,
        zoom: 12
      },
      defaults: {
        scrollWheelZoom: false,
        zoomControl:false
      }
    });

    $ionicModal.fromTemplateUrl('my-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.openModal = function() {
      $scope.modal.show();
    };
    $scope.closeModal = function() {
      $scope.modal.hide();
    };
  })

  .controller('PlaylistCtrl', function ($scope, $stateParams) {
    /*angular.extend($scope, {
      defaults: {
        scrollWheelZoom: false
      }
    });*/
  })

  .controller('RoutesController', ['$scope',function ($scope) {


    $scope.routes = [
      {start:"Caguas",end:"Aguas Buenas"},
      {start:"Caguas",end:"Bo. Beatriz"},
      {start:"Caguas",end:"Centro Medico"},
    ];

  }])
  .controller('RoutesDetailController', ['$scope','$stateParams',function ($scope,$stateParams) {


  }]);
