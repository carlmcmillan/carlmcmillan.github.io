var heart = {

  _interval: null,

  run: function() {
    var canvas = document.querySelector('#canvasHeart');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "#ffffff";
    ctx.lineWidth = 6.0;
    ctx.shadowBlur = 10.0;
    ctx.shadowColor = "#ffffff";

    var i = 0;

    var x = 378;
    var y = 300;

    var grow = true;

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