var app = angular.module('main', ['ngTable']).
controller('DemoCtrl', function($scope) {

    $scope.users = [
            {name: "Moroni", age: 50 ,link:"http:www.jd.com"},
            {name: "Tiancum", age: 43,link:"http:www.jd.com"},
            {name: "Jacob", age: 27,link:"http:www.jd.com"},
            {name: "Nephi", age: 29,link:"http:www.jd.com"},
            {name: "Enos", age: 34,link:"http:www.jd.com"}
        ];
})