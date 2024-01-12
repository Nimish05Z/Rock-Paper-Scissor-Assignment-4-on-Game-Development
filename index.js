document.addEventListener("DOMContentLoaded", function () {
  let playGame = document.getElementById("play-the-game");

  playGame.addEventListener("click", function () {
    window.location.href = "./game.html";
  });
});
