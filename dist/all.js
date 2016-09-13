'use strict';

angular.module('zenPaintApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider.state('welcome', {
    url: '/',
    controller: 'welcomeController',
    templateUrl: '../views/welcome.html'

  }).state('home', {
    url: '/home',
    controller: 'homeController',
    templateUrl: '../views/home.html'

  }).state('about', {
    url: '/about',
    controller: 'aboutController',
    templateUrl: '../views/about.html'

  });

  $urlRouterProvider.otherwise('/');
});

angular.module('zenPaintApp').controller('aboutController', function ($scope) {});

angular.module('zenPaintApp').directive('brushDirective', function () {

  return {
    templateUrl: '../views/brushDirective.html',
    restrict: 'AE',
    link: function link(scope, element, attr) {

      element.on('click', function (event) {
        scope.brush(attr.brushDirective);
      });
    }
  };
});

angular.module('zenPaintApp').controller('homeController', function ($scope, service) {

  $scope.canvasInit = function () {
    return service.canvasInit();
  };
  $scope.canvasInit();

  $scope.brushes = service.brushes;

  $scope.brush = function (b) {
    return service[b]();
  };
  $scope.brush('brush1');
});

angular.module('zenPaintApp').controller('welcomeController', function ($scope) {});

angular.module('zenPaintApp').service('service', function () {

  //Initialize Canvas Size//
  this.canvasInit = function () {
    var canvas = document.querySelector('#paint');
    var ctx = canvas.getContext('2d');
    var sketch = document.querySelector('#sketch');
    var sketch_style = getComputedStyle(sketch);
    canvas.width = parseInt(sketch_style.getPropertyValue('width'));
    canvas.height = parseInt(sketch_style.getPropertyValue('height'));
  };

  //Canvas Fadeout//
  this.fadeOut = function (num) {
    var canvas = document.querySelector('#paint');
    var ctx = canvas.getContext('2d');
    function fadeOut() {
      ctx.globalCompositeOperation = 'lighter';
      ctx.fillStyle = "rgba(255,255,255, 0.009)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      setTimeout(fadeOut, num);
      ctx.globalCompositeOperation = 'source-over';
    }
    fadeOut();
  };

  ///////////////////
  //Bush Styles//////
  ///////////////////

  this.brush1 = function () {
    var canvas = document.querySelector('#paint');
    var ctx = canvas.getContext('2d');
    var mouse = { x: 0, y: 0 };
    canvas.addEventListener('mousemove', function (e) {
      mouse.x = e.pageX - this.offsetLeft;
      mouse.y = e.pageY - this.offsetTop;
    }, false);

    var img = new Image();
    img.src = 'https://raw.githubusercontent.com/crosspop/Croquispop/master/img/brush/b3.png';

    function distanceBetween(point1, point2) {
      return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
    }
    function angleBetween(point1, point2) {
      return Math.atan2(point2.x - point1.x, point2.y - point1.y);
    }

    ctx.lineJoin = ctx.lineCap = 'round';
    ctx.strokeStyle = 'rgba(0,0,0,0.3)';

    var isDrawing, lastPoint;

    canvas.onmousedown = function (e) {
      isDrawing = true;
      lastPoint = { x: mouse.x, y: mouse.y };
    };

    canvas.onmousemove = function (e) {
      if (!isDrawing) return;

      var currentPoint = { x: mouse.x, y: mouse.y };
      var dist = distanceBetween(lastPoint, currentPoint);
      var angle = angleBetween(lastPoint, currentPoint);

      for (var i = 0; i < dist; i++) {
        var x = lastPoint.x + Math.sin(angle) * i - 25;
        var y = lastPoint.y + Math.cos(angle) * i - 25;
        ctx.drawImage(img, x, y);
      }

      lastPoint = currentPoint;
    };

    canvas.onmouseup = function () {
      isDrawing = false;
    };
  };

  //////////////////////////////////////////

  this.brush2 = function () {
    var canvas = document.querySelector('#paint');
    var ctx = canvas.getContext('2d');
    var mouse = { x: 0, y: 0 };
    canvas.addEventListener('mousemove', function (e) {
      mouse.x = e.pageX - this.offsetLeft;
      mouse.y = e.pageY - this.offsetTop;
    }, false);

    var img = new Image();
    img.src = 'https://raw.githubusercontent.com/crosspop/Croquispop/master/img/brush/b1.png';

    function distanceBetween(point1, point2) {
      return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
    }
    function angleBetween(point1, point2) {
      return Math.atan2(point2.x - point1.x, point2.y - point1.y);
    }

    ctx.lineJoin = ctx.lineCap = 'round';
    ctx.strokeStyle = 'rgba(0,0,0,0.3)';

    var isDrawing, lastPoint;

    canvas.onmousedown = function (e) {
      isDrawing = true;
      lastPoint = { x: mouse.x, y: mouse.y };
    };

    canvas.onmousemove = function (e) {
      if (!isDrawing) return;

      var currentPoint = { x: mouse.x, y: mouse.y };
      var dist = distanceBetween(lastPoint, currentPoint);
      var angle = angleBetween(lastPoint, currentPoint);

      for (var i = 0; i < dist; i++) {
        var x = lastPoint.x + Math.sin(angle) * i - 25;
        var y = lastPoint.y + Math.cos(angle) * i - 25;
        ctx.drawImage(img, x, y);
      }

      lastPoint = currentPoint;
    };

    canvas.onmouseup = function () {
      isDrawing = false;
    };
  };

  //////////////////////////////////////////

  this.brush3 = function () {
    var canvas = document.querySelector('#paint');
    var ctx = canvas.getContext('2d');
    var mouse = { x: 0, y: 0 };
    canvas.addEventListener('mousemove', function (e) {
      mouse.x = e.pageX - this.offsetLeft;
      mouse.y = e.pageY - this.offsetTop;
    }, false);

    var img = new Image();
    img.src = 'https://raw.githubusercontent.com/triceam/HTML5-Canvas-Brush-Sketch/master/src/assets/brush2.png';

    function distanceBetween(point1, point2) {
      return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
    }
    function angleBetween(point1, point2) {
      return Math.atan2(point2.x - point1.x, point2.y - point1.y);
    }

    ctx.lineJoin = ctx.lineCap = 'round';
    ctx.strokeStyle = 'rgba(0,0,0,0.3)';

    var isDrawing, lastPoint;

    canvas.onmousedown = function (e) {
      isDrawing = true;
      lastPoint = { x: mouse.x, y: mouse.y };
    };

    canvas.onmousemove = function (e) {
      if (!isDrawing) return;

      var currentPoint = { x: mouse.x, y: mouse.y };
      var dist = distanceBetween(lastPoint, currentPoint);
      var angle = angleBetween(lastPoint, currentPoint);

      for (var i = 0; i < dist; i++) {
        var x = lastPoint.x + Math.sin(angle) * i - 25;
        var y = lastPoint.y + Math.cos(angle) * i - 25;
        ctx.drawImage(img, x, y);
      }

      lastPoint = currentPoint;
    };

    canvas.onmouseup = function () {
      isDrawing = false;
    };
  };

  //////////////////////////////////////////

  this.brush4 = function () {
    var canvas = document.querySelector('#paint');
    var ctx = canvas.getContext('2d');
    var mouse = { x: 0, y: 0 };
    canvas.addEventListener('mousemove', function (e) {
      mouse.x = e.pageX - this.offsetLeft;
      mouse.y = e.pageY - this.offsetTop;
    }, false);

    ctx.lineWidth = 3;
    ctx.lineJoin = ctx.lineCap = 'round';

    var isDrawing,
        points = [];

    canvas.onmousedown = function (e) {
      points = [];
      isDrawing = true;
      points.push({ x: mouse.x, y: mouse.y });
    };

    canvas.onmousemove = function (e) {
      if (!isDrawing) return;

      points.push({ x: mouse.x, y: mouse.y });

      ctx.beginPath();
      ctx.moveTo(points[points.length - 2].x, points[points.length - 2].y);
      ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
      ctx.stroke();

      for (var i = 0, len = points.length; i < len; i++) {
        var dx = points[i].x - points[points.length - 1].x;
        var dy = points[i].y - points[points.length - 1].y;
        var d = dx * dx + dy * dy;

        if (d < 1000) {
          ctx.beginPath();
          ctx.strokeStyle = 'rgba(0,0,0,0.3)';
          ctx.moveTo(points[points.length - 1].x + dx * 0.2, points[points.length - 1].y + dy * 0.2);
          ctx.lineTo(points[i].x - dx * 0.2, points[i].y - dy * 0.2);
          ctx.stroke();
        }
      }
    };

    canvas.onmouseup = function () {
      isDrawing = false;
      points.length = 0;
    };
  };

  //////////////////////////////////////////

  this.brush5 = function () {
    var canvas = document.querySelector('#paint');
    var ctx = canvas.getContext('2d');
    var mouse = { x: 0, y: 0 };

    canvas.addEventListener('mousemove', function (e) {
      mouse.x = e.pageX - this.offsetLeft;
      mouse.y = e.pageY - this.offsetTop;
    }, false);

    ctx.lineWidth = 5;
    ctx.lineJoin = ctx.lineCap = 'round';
    ctx.strokeStyle = 'rgba(0,0,0,0.3)';

    var isDrawing,
        points = [];

    canvas.onmousedown = function (e) {
      isDrawing = true;
      points.push({ x: mouse.x, y: mouse.y });
    };

    canvas.onmousemove = function (e) {
      if (!isDrawing) return;

      points.push({ x: mouse.x, y: mouse.y });

      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (var i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
        var nearPoint = points[i - 5];
        if (nearPoint) {
          ctx.moveTo(nearPoint.x, nearPoint.y);
          ctx.lineTo(points[i].x, points[i].y);
        }
      }
      ctx.stroke();
    };

    canvas.onmouseup = function () {
      isDrawing = false;
      points.length = 0;
    };
  };

  ///////////////////////////////////////

  this.brush6 = function () {
    var canvas = document.querySelector('#paint');
    var ctx = canvas.getContext('2d');
    var mouse = { x: 0, y: 0 };
    canvas.addEventListener('mousemove', function (e) {
      mouse.x = e.pageX - this.offsetLeft;
      mouse.y = e.pageY - this.offsetTop;
    }, false);

    ctx.lineWidth = 4;

    var isDrawing,
        points = [];

    canvas.onmousedown = function (e) {
      points = [];
      isDrawing = true;
      points.push({ x: mouse.x, y: mouse.y });
    };

    canvas.onmousemove = function (e) {
      if (!isDrawing) return;

      points.push({ x: mouse.x, y: mouse.y });

      ctx.beginPath();
      ctx.moveTo(points[points.length - 2].x, points[points.length - 2].y);
      ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
      ctx.stroke();

      for (var i = 0, len = points.length; i < len; i++) {
        var dx = points[i].x - points[points.length - 1].x;
        var dy = points[i].y - points[points.length - 1].y;
        var d = dx * dx + dy * dy;

        if (d < 2000 && Math.random() > d / 2000) {
          ctx.beginPath();
          ctx.strokeStyle = 'rgba(0,0,0,0.3)';
          ctx.moveTo(points[points.length - 1].x + dx * 0.5, points[points.length - 1].y + dy * 0.5);
          ctx.lineTo(points[points.length - 1].x - dx * 0.5, points[points.length - 1].y - dy * 0.5);
          ctx.stroke();
        }
      }
    };

    canvas.onmouseup = function () {
      isDrawing = false;
      points.length = 0;
    };
  };

  /////////////////////////////
});

angular.module('zenPaintApp').directive('sliderDirective', function () {

  return {
    restrict: 'A',
    scope: {},
    controller: function controller($scope, service) {
      $scope.fadeOut = function (num) {
        service.fadeOut(num);
      };
      $(document).ready(function () {
        $('#slider').slider({
          change: function change(event, ui) {
            $scope.fadeOut(ui.value * 6);
          }
        });
      });
    }
  };
});