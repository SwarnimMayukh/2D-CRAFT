window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38'){
        up();
        console.log("up");

    }
}

function up() {
    window.location = "https://swarnimmayukh.github.io/2D-Craft-My-First-Try-./";
}

setTimeout(function(){
    window.location = "https://swarnimmayukh.github.io/2D-Craft-My-First-Try-./";
},42000);