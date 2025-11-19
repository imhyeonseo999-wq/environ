// 기본 텍스트 출력
$("#output").append("<h2>Evening in My Imaginary Field</h2>");
$("#output").append("<p>The field is filled with wind, grass, sheep, silence, light.</p>");
$("#output").append("<p>The weather feels calm and the air is mild.</p>");
$("#output").append("<p>You can hear rustling and distant bells.</p>");
$("#output").append("<p>Overall, it feels nostalgic.</p>");


// ---------------------------
// 1) 스크롤하면 이미지 조금 움직이기
// ---------------------------
$(window).on("scroll", function () {
  let y = $(window).scrollTop();

  // 아주 단순한 이동
  $("#sheep").css("margin-left", y * 0.1 + "px");
  $("#sheep3").css("margin-left", y * -0.1 + "px");
});


// ---------------------------
// 2) hover 시 간단한 말풍선
// ---------------------------

$("#sheep3").on("mouseenter", function () {
  $("body").append("<div id='tip'>thought…</div>");
  $("#tip").css({
    position: "absolute",
    top: event.pageY + 10 + "px",
    left: event.pageX + 10 + "px",
    background: "black",
    color: "white",
    padding: "5px 8px",
    fontSize: "12px"
  });
});

$("#sheep3").on("mousemove", function (event) {
  $("#tip").css({
    top: event.pageY + 10 + "px",
    left: event.pageX + 10 + "px"
  });
});

$("#sheep3").on("mouseleave", function () {
  $("#tip").remove();
});


// ---------------------------
// 3) 이미지 클릭 → 페이지 이동
// ---------------------------
$("#sheep3").on("click", function () {
  window.location.href = "env0101.html";
});
