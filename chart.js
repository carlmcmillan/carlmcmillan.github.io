var chart = {

  _interval: null,

  run: function() {
    var amplitudeControl = document.querySelector("#amplitude");
    var amplitude = amplitudeControl.value;
    amplitudeControl.addEventListener("input", function() {
      amplitude = this.value;
    });

    var frequencyControl = document.querySelector("#frequency");
    var frequency = frequencyControl.value;
    frequencyControl.addEventListener("input", function() {
      frequency = this.value;
    });

    var canvas = document.querySelector("#canvas");
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#e8f442";
    ctx.lineWidth = 6.0;
    ctx.shadowBlur = 10.0;
    ctx.shadowColor = "#e8f442";

    var xSize = canvas.width;
    var yOffset = canvas.height/2;
    var xOffset = 0;

    function draw() {
      for (var i = 0; i < xSize; i++) {
        var x = i + xOffset;
        var y = yOffset - Math.sin(x/(frequency)) * (yOffset-amplitude);
        if (i === 0) {
          ctx.beginPath();
          ctx.moveTo(0, y);
        }
        ctx.lineTo(i, y);
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.stroke();
      xOffset++;
    }

    this._interval = setInterval(draw, 2);
  },

  stop: function() {
    if (this._interval != null) {
      clearInterval(this._interval);
      this._interval = null;
    }
  }

};