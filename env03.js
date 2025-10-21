// 환경(Env) 정보를 변수, 배열, 객체로 구성해보기

let title = "Evening in My Imaginary Field";
let elements = ["wind", "grass", "sheep", "silence", "light"];
let environment = {
  weather: "calm",
  temperature: "mild",
  sounds: ["rustling", "distant bells"],
  feeling: "nostalgic"
};

// HTML에 내용 추가하기
$("#output").append("<h2>" + title + "</h2>");
$("#output").append("<p>The field is filled with: " + elements.join(", ") + ".</p>");
$("#output").append("<p>The weather feels " + environment.weather + " and the air is " + environment.temperature + ".</p>");
$("#output").append("<p>You can hear " + environment.sounds.join(" and ") + ".</p>");
$("#output").append("<p>Overall, it feels " + environment.feeling + ".</p>");

// 이미지 클릭 시 새로운 페이지로 이동
$(document).ready(function () {
  $("#sheep3").on("click", function () {
    window.location.href = "env0101.html"; 
  });
});
