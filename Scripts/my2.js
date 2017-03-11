var current_color = 0;
function change_background() {
var colors = [
  "rgb(247, 122, 19)",
  "rgb(165, 148, 210)",
  "rgb(126, 240, 130)",
  "rgb(71, 190, 233)",
  "rgb(250, 79, 99)",
  "rgb(203, 99, 74)",
  "rgb(255, 255, 255)"
];

console.log(current_color);
document.body.style.background = colors[current_color];

current_color += 1;
if (current_color > colors.length - 1) {
  current_color = 0;
}
}
