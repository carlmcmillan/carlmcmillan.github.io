var heartPage = document.querySelector("#heartPage");
var heartButton = document.querySelector("#heartButton");

var chartPage = document.querySelector("#chartPage");
var chartButton = document.querySelector("#chartButton");

var mapPage = document.querySelector("#mapPage");
var mapButton = document.querySelector("#mapButton");

heart.run();

heartButton.addEventListener("click", function() {
  hideAll();
  heartPage.style.display = "block";
  heart.run();
});

chartButton.addEventListener("click", function() {
  hideAll();
  chartPage.style.display = "block";
  chart.run();
});

mapButton.addEventListener("click", function() {
  hideAll();
  mapPage.style.display = "block";
  map.create();
});

function hideAll() {
  heartPage.style.display = "none";
  heart.stop();
  chartPage.style.display = "none";
  chart.stop();
  mapPage.style.display = "none";
  map.destroy();
}
