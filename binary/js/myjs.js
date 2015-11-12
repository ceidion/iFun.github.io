var myApp = angular.module('myApp', []);


myApp.controller('mainController', ['$scope', '$filter','$interval',function($scope, $filter, $interval) {
                               
    
    $interval(function() {
    $scope.HHmmss = $filter('date')(new Date(), 'HH:mm:ss');
    $scope.data = convertToBinary($scope.HHmmss);
   
}, 1000);
    
}]);

function convertToBinary(data)
{
    //var asd = "asd:asd:sd:Sd"
    var tmp = data.replace(":","");
    tmp = tmp.replace(":","");
    var num = parseInt(tmp);
    return num.toString(2);
}