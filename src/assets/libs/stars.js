import $ from 'jquery';

function Constellation(canvas) {
  const _this = this;
  const context = canvas.getContext('2d');
  const config = {
    star: {
      color: 'rgba(255, 255, 255, .3)',
      width: 3,
    },
    line: {
      color: 'rgba(255, 255, 255, .3)',
      width: 0.3,
    },
    position: {
      x: 0,
      y: 0,
    },
    width: window.innerWidth,
    height: window.innerHeight,
    length: Math.sqrt(Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2)) / 10,
    distance: 150,
    radius: 170,
    stars: [],
  };

  function Star() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * config.star.width;

    this.vx = (0.5 - Math.random()) / 5;
    this.vy = (0.5 - Math.random()) / 5;

    this.create = function () {
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      context.fill();
    };
  }

  this.animate = function () {
    for (let i = 0; i < config.length; i++) {

      let star = config.stars[i];

      if (star.y < 0 || star.y > canvas.height) {
        star.vy = -star.vy;
      } else if (star.x < 0 || star.x > canvas.width) {
        star.vx = -star.vx;
      }

      star.x += star.vx;
      star.y += star.vy;
    }
  };

  this.line = function () {
    let length = config.length,
      iStar,
      jStar,
      i,
      j;

    for (i = 0; i < length; i++) {
      for (j = 0; j < length; j++) {
        iStar = config.stars[i];
        jStar = config.stars[j];

        if (
          (iStar.x - jStar.x) < config.distance &&
          (iStar.y - jStar.y) < config.distance &&
          (iStar.x - jStar.x) > -config.distance &&
          (iStar.y - jStar.y) > -config.distance
        ) {
          if (
            (iStar.x - config.position.x) < config.radius &&
            (iStar.y - config.position.y) < config.radius &&
            (iStar.x - config.position.x) > -config.radius &&
            (iStar.y - config.position.y) > -config.radius
          ) {
            context.beginPath();
            context.moveTo(iStar.x, iStar.y);
            context.lineTo(jStar.x, jStar.y);
            context.stroke();
            context.closePath();
          }
        }
      }
    }
  };

  this.createStars = function () {
    context.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < config.length; i++) {
      config.stars.push(new Star());
      config.stars[i].create();
    }

    _this.animate();
    _this.line();
  };

  this.setCanvas = function () {
    canvas.width = config.width;
    canvas.height = config.height;
  };

  this.setContext = function () {
    context.fillStyle = config.star.color;
    context.strokeStyle = config.line.color;
    context.lineWidth = config.line.width;
  };

  this.loop = function (callback) {
    callback();

    _this.loopId = window.requestAnimationFrame(function () {
      _this.loop(callback);
    });
  };

  this.bind = function () {
    canvas.addEventListener('mousemove', function (e) {
      config.position.x = e.pageX - canvas.offsetLeft;
      config.position.y = e.pageY - canvas.offsetTop;
    });
  };

  this.init = function () {
    this.setCanvas();
    this.setContext();
    this.loop(this.createStars);
    this.bind();
  };

  this.refresh = function () {
    cancelAnimationFrame(_this.loopId);
    context.clearRect(0, 0, canvas.width, canvas.height);
    config.width = window.innerWidth;
    config.height = window.innerHeight;
    config.length = Math.sqrt(Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2)) / 10;
    config.stars = [];
    this.init();
  };

  this.pauseAnimations = function () {
    if (($(window).scrollTop() > config.height / 2) && _this.loopId) {
      cancelAnimationFrame(_this.loopId);
      _this.loopId = 0;
    } else if ($(window).scrollTop() < config.height / 2 && (_this.loopId === 0)) {
      _this.loop(_this.createStars);
    }
  };
}

document.addEventListener('DOMContentLoaded', function () {
  let stars = new Constellation($('.background-canvas')[0]);
  let timeoutId;
  stars.init();

  function resizeEvent() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(stars.refresh(), 300);
  }

  $(window).resize(resizeEvent);
  $(window).scroll(stars.pauseAnimations);
});
