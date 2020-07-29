var pageObjects = {
  resume: resume, 
  text: text, 
  heart: heart, 
  chart: chart, 
  dino: dino, 
  map: map
};

pageObjects["resume"].run();

//for (let name in pageObjects) {
//  
//  let obj = pageObjects[name];
//
//  let page = document.querySelector("#" + name + "Page");
//  let button = document.querySelector("#" + name + "Button");
//
//  button.addEventListener("click", function() {
//    hideAll();
//    page.classList.remove("hide");
//    page.classList.add("show");
//    obj.run();
//  });
//}
//
//function hideAll() {
//  for (let name in pageObjects) {
//
//    let obj = pageObjects[name];
//
//    let page = document.querySelector("#" + name + "Page");
//
//    page.classList.remove("show");
//    page.classList.add("hide");
//    obj.stop();
//  };
//
//}
