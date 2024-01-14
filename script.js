function swapTheme(){
	var button = document.getElementById("swap");
    var main = document.getElementById("app");
    main.classList.toggle("night");
    button.classList.toggle("button_night");

}