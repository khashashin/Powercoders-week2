var current_color = 255;

function darken_background() {

    current_color -= 20;

    if (current_color < 0) {
        current_color = 0;
        alert("DARKNESS CAME!!!")
    }
    document.body.style.background = "rgb(" + current_color + "," + current_color + "," + current_color + ")";

}


function brighten_background() {

    current_color += 20;

    if (current_color > 275) {
        current_color = 255;
        alert("LIGHT WON!!!")
    }
    document.body.style.background = "rgb(" + current_color + "," + current_color + "," + current_color + ")";

}
