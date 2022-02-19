var button_audio = new Audio(
  "https://monoame.com/awi_class/ballsound/click14.wav"
);

var screen_audio = new Audio(
  "https://monoame.com/awi_class/ballsound/click18.wav"
);

var home_audio = new Audio(
  "https://monoame.com/awi_class/ballsound/click23.wav"
);

var wiggle_audio = new Audio(
  "https://monoame.com/awi_class/ballsound/phonevi.mp3"
);

https: $(".i5").click(function () {
  $(".phone").css("width", "");
  $(".screen").css("height", "");
  $(".phonename").text($(this).text());
  button_audio.play();
});

// 點到i5s這個class的html時，觸發click事件
$(".i5s").click(function () {
  $(".phone").css("width", "250px");
  $(".screen").css("height", "420px");
  $(".phonename").text($(this).text());
  button_audio.play();
});
$(".i6").click(function () {
  $(".phone").css("width", "270px");
  $(".screen").css("height", "440px");
  $(".phonename").text($(this).text());
  button_audio.play();
});
$(".i6s").click(function () {
  $(".phone").css("width", "300px");
  $(".screen").css("height", "480px");
  $(".phonename").text($(this).text());
  button_audio.play();
});

var page = 0;
//因為*{}有設position relative 所以可以直接用left改變位置
$(".screen").click(function () {
  page += 1;
  if (page > 2) {
    page = 0;
  }
  $(".pages").css("left", "-" + page * 100 + "%");
  screen_audio.play();
});

$(".button").click(function () {
  page = 0;
  $(".pages").css("left", "-" + page * 100 + "%");
  home_audio.play();
});

$(".turn").click(function () {
  $(".phone").css("transform", "rotate(360deg");
});

//震動設定，一開始些設定21，當觸及到wiggle得時候，
var wiggletime = 21;
$(".wiggle").click(function () {
  wiggletime = 0;
  wiggle_audio.play();
});

setInterval(function () {
  if (wiggletime <= 20) {
    wiggletime += 1;
    console.log(wiggletime);
    if (wiggletime % 2 == 0) {
      $(".phone").css("left", "-30px");
    } else {
      $(".phone").css("left", "30px");
    }

    if (wiggletime == 21) {
      $(".phone").css("left", "");
    }
  }
}, 60);
