window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38'){
        up();
        console.log("Let's play some games and have some fun !!..");

    }
}

function up() {
    window.location = "https://swarnimmayukh.github.io/2D-Craft-My-First-Try-./";
}
