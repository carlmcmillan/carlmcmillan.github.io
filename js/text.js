var text = {

  _interval: null,

  run: function() {
    var canvas = document.querySelector('#textCanvas');
    var ctx = canvas.getContext('2d');

    var intervalSizeMs = 100;
    var wordChangeMs = 500;
    var fontHeightPx = 30;

    var baseColour = '#3a3a38';
    var sentenceColours = ['red', 'green'];

    ctx.font = fontHeightPx + 'px Courier New';
    ctx.textBaseline = 'top';
    ctx.fillStyle = baseColour;
    
    function randomChr() {
      var n = Math.floor(Math.random() * 26) + 97;
      var chr = String.fromCharCode(n);
      var measure = ctx.measureText(chr);
      if (measure.width == 0) {
        return randomChr();
      } else {
        return chr;
      }
    }

    function drawChr(x, y) {
      var chr = randomChr();
      var measure = ctx.measureText(chr);
      var chrWidth = measure.width;
      ctx.fillText(chr, x, y);
      return chrWidth;
    }

    var centreX = canvas.width/2;
    var centreY = canvas.height/2;

    var sentences = [ "but i was going into tosche station to pick up some power converters",
                      "you can waste time with your friends when your chores are done"];

    var sentencePos = 0;
    var words = sentences[sentencePos].split(" ");
    var wordsPos = 0;

    var cursorY = 0;
    var counter = 0;

    function draw() {
      if (cursorY > canvas.height && intervalSizeMs * counter % wordChangeMs == 0) {
        if (wordsPos >= words.length - 1) {
          wordsPos = 0;
          sentencePos = (sentencePos + 1) % sentences.length;
          words = sentences[sentencePos].split(" ");
        } else {
          wordsPos ++;
        }
      }
      var currentWord = words[wordsPos];
      var wordWidth = ctx.measureText(currentWord).width;
      var x = 0;
      var y = 0;
      ctx.clearRect(x, y, canvas.width, canvas.height);
      while (y + fontHeightPx < canvas.height && y < cursorY) {
        if (y >= centreY - fontHeightPx && y < centreY && x >= centreX - wordWidth/2 && x < centreX + wordWidth/2) {
          ctx.fillStyle = sentenceColours[sentencePos];
          ctx.fillText(currentWord, x, y);
          ctx.fillStyle = baseColour;
          x += wordWidth;
        } else {
          var chrWidth = drawChr(x, y);
          if (x + chrWidth * 2 > canvas.width) {
            x = 0;
            y += fontHeightPx;
          } else {
            x += chrWidth;
          }
        }
      }
      if (cursorY <= canvas.height) {
        cursorY += fontHeightPx;
      }
      counter++;
    }

    this._interval = setInterval(draw, intervalSizeMs);
  },

  stop: function() {
    if (this._interval != null) {
      clearInterval(this._interval);
      this._interval = null;
    }
  }

};