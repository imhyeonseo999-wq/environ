$(document).ready(function () {
  $("#output").append("<h2>" + title + "</h2>");
  $("#output").append("<p>The field is filled with: " + elements.join(", ") + ".</p>");
  $("#output").append("<p>The weather feels " + environment.weather + " and the air is " + environment.temperature + ".</p>");
  $("#output").append("<p>You can hear " + environment.sounds.join(" and ") + ".</p>");
  $("#output").append("<p>Overall, it feels " + environment.feeling + ".</p>");
});


window.addEventListener("scroll", function () {
  let scrollY = window.scrollY;

  $("#sheep").css("transform", "translateX(" + scrollY * 0.2 + "px)");

  $("#sheep3").css("transform", "translateX(" + scrollY * -0.2 + "px)");
});


function makeTooltip(text) {
  let tooltip = $("<div class='tooltip-box'></div>");
  tooltip.text(text);
  $("body").append(tooltip);
  return tooltip;
}

let tooltip;

$("#sheep3").on("mouseenter", function (e) {
  tooltip = makeTooltip("Sheep 3 - click me!");
  tooltip.css({ top: e.pageY + 10, left: e.pageX + 10 }).fadeIn(150);
});

$("#sheep3").on("mousemove", function (e) {
  tooltip.css({ top: e.pageY + 10, left: e.pageX + 10 });
});

$("#sheep3").on("mouseleave", function () {
  tooltip.remove();
});
