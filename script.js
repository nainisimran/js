var div = $("div");

div.on("mouseover", changeBackgroundColorToBlue);
div.on("mouseout", changeBackgroundColorToWhite);

function changeBackgroundColorToBlue(){
  // No need to change the content of this function. Don't worry if this code is new to you.
  $("body").css("background", "blue");
}

function changeBackgroundColorToWhite(){
  // No need to change the content of this function. Don't worry if this code is new to you.
  $("body").css("background", "white");
}
