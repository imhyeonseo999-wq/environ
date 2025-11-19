
let title = "Evening in My Imaginary Field";
let elements = ["wind", "grass", "sheep", "silence", "light"];
let environment = {
  weather: "calm",
  temperature: "mild",
  sounds: ["rustling", "distant bells"],
  feeling: "nostalgic"
};

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

  // sheep3 → 오른쪽으로 천천히 이동
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
  tooltip = makeTooltip("This thought keeps coming back.");
  tooltip.css({
    position: "fixed",
    top: e.clientY + 10 + "px",
    left: e.clientX + 10 + "px",
    padding: "8px 12px",
    background: "rgba(0,0,0,0.7)",
    color: "#fff",
    borderRadius: "6px",
    fontSize: "14px",
    pointerEvents: "none"
  });
});

$("#sheep3").on("mousemove", function (e) {
  if (tooltip) {
    tooltip.css({
      top: e.clientY + 10 + "px",
      left: e.clientX + 10 + "px"
    });
  }
});

$("#sheep3").on("mouseleave", function () {
  if (tooltip) tooltip.remove();
});


$("#sheep3").on("click", function () {
  window.location.href = "env0101.html";
});
