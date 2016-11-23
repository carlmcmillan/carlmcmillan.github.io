var dino = {

  run: function() {
      var canvas = document.querySelector("#dinoCanvas");
      var ctx = canvas.getContext("webgl");
      ctx.clearColor(0.0, 0.0, 0.0, 1.0);
      ctx.enable(ctx.DEPTH_TEST);
      ctx.depthFunc(ctx.LEQUAL);
      ctx.clear(ctx.COLOR_BUFFER_BIT | ctx.DEPTH_BUFFER_BIT);
      ctx.viewport(0, 0, canvas.width, canvas.height);
  },

  stop: function() {

  }

}