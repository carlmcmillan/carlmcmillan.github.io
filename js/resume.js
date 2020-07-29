var resume = {
  
  run: function() {
    var converter = new showdown.Converter();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        var md = xhttp.responseText;
        var html = converter.makeHtml(md);
        document.querySelector("#resume").innerHTML = html;
      }
    }
    xhttp.open("GET", "md/resume.md", true);
    xhttp.send();
  },

  stop: function() {}

}
