var heart = {

  _interval: null,

  run: function() {
    var minRed = 50;
    var maxRed = 255;
    var red = minRed;

    var body = document.querySelector("body");
    body.addEventListener("mousemove", function() {
      if (red < maxRed) {
        red++;
        colourHeart();
      }
    });

    var canvas = document.querySelector('#canvasHeart');
    var ctx = canvas.getContext('2d');
    ctx.lineWidth = 6.0;
    ctx.shadowBlur = 12.0;
    colourHeart();

    var i = 0;

    var x = 378;
    var y = 300;

    var grow = true;

    function colourHeart() {
      heartColour = "rgb(" + red + ", 0, 0)";
      ctx.shadowColor = heartColour;
      ctx.fillStyle = heartColour;
    }

    function draw() {
      if (grow) {
        i++;
        grow = i < Math.PI*2;
      } else {
        i--;
        grow = i < 0;
      }
      var size = Math.sin(i/(2*Math.PI)) * 5 + 180;

      ctx.beginPath();
      ctx.moveTo(x, y-size*0.7);
      ctx.bezierCurveTo(x, y-size*0.76, x-size*0.1, y-size, x-size*0.5, y-size);
      ctx.bezierCurveTo(x-size*1.1, y-size, x-size*1.1, y-size*0.25, x-size*1.1, y-size*0.25);
      ctx.bezierCurveTo(x-size*1.1, y+size*0.1, x-size*0.7, y+size*0.54, x, y+size*0.9);
      ctx.bezierCurveTo(x+size*0.7, y+size*0.54, x+size*1.1, y+size*0.1, x+size*1.1, y-size*0.25);
      ctx.bezierCurveTo(x+size*1.1, y-size*0.25, x+size*1.1, y-size, x+size*0.5, y-size);
      ctx.bezierCurveTo(x+size*0.2, y-size, x, y-size*0.76, x, y-size*0.7);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fill();

      if (red > minRed) {
        red--;
        colourHeart();
      }
    }

    this._interval = setInterval(draw, 60);
  },

  stop: function() {
    if (this._interval != null) {
      clearInterval(this._interval);
      this._interval = null;
    }
  }

};