/*function testFunction() {
  document.getElementById("main-box").classList.toggle("box-2");
  var x = document.getElementById("text");
  if (x.innerHTML === "Click to Expand") {
    x.innerHTML = "Click to Shrink";
  } else {
    x.innerHTML = "Click to Expand";
  }
}

window.onload = function() {
  document.getElementById("button").addEventListener("click", testFunction);
};

*/

/* jQuery took way less code */

$(document).ready(function() {
  $("#button").click(function() {
    $("#main-box").toggleClass("box-2", 1000);
    $("#text").text(function(i, text) {
      return text === "Click to Expand" ? "Click to Shrink" : "Click to Expand";
    });
  });
});


