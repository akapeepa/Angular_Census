
var myApp = angular.module('myApp',['ngRoute','ngResource']);

//Routes
myApp.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl:'pages/home.htm',
    controller:'MainController',
    controllerAs:'mc'
  });
});

//controller
myApp.controller('MainController',['$scope','$resource',function($scope,$resource){
  var vm = this;
  vm.getCensus = function(){
    vm.get = $resource('http://api.census.gov/data/timeseries/idb/1year?get=AREA_KM2,NAME,AGE,POP&FIPS='+vm.countrycode+'&time='+vm.year+'&SEX=0&key=b4185ab9ebc26ff683abdbbd02c3c44ded2c9963').query();
    // console.log(vm.get);
  }
}]);
