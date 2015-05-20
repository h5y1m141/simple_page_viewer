'use strict';

/**
 * @ngdoc function
 * @name DrawingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the DrawingApp
 */
angular.module('DrawingApp')
  .controller('MainCtrl', function ($scope) {
    $scope.title = "Web絵画教室";
    $scope.menuItems = [
      { "title": "Home"   ,"link": "/link1" },
      { "title": "About"  ,"link": "/link2" },
      { "title": "動画講座" , "link": "/link3" },
      { "title": "講師紹介" ,"link": "/link4" },
      { "title": "生徒作品" ,"link": "/link5" },
      { "title": "コラム"   ,"link": "/link6" }
    ];
    $scope.pictures = [
      {
        "description":"車体正面",
        "img":"http://news.walkerplus.com/article/56985/314481_615.jpg"
      },
      {
        "description":"出発時の写真",
        "img":"http://news.walkerplus.com/article/56985/314482_615.jpg"
      },
      {
        "description":"社内の座席",
        "img":"http://news.walkerplus.com/article/56985/314483_615.jpg"
      },
      {
        "description":"風景写真",
        "img":"http://news.walkerplus.com/article/56985/314484_615.jpg"
      }
    ];
    // 表示する写真を以下変数を利用する。
    // ここで宣言することで起動時に表示する写真が決まる
    $scope.selected = $scope.pictures[0];
    $scope.selectPicture = function(pictureNumber){
      return $scope.selected = $scope.pictures[pictureNumber];
    };

  });
