canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

background_image = "parkingLot.jpg";
greencar_image = "car2.png";
greencar_x=5;
greencar_y=225;
greencar_width=75;
greencar_height=100;

function add(){
        background_imgTag = new Image(); 
        background_imgTag.onload = uploadbackground; 
        background_imgTag.src = background_image;  
        
        greencar_imgTag = new Image(); 
        greencar_imgTag.onload = uploadgreencar; 
        greencar_imgTag.src = greencar_image;  
}

function uploadbackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadgreencar(){
    ctx.drawImage(greencar_imgTag,greencar_x,greencar_y,greencar_width,greencar_height);

}
    
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode
    console.log(keypressed)
    if (keypressed==38){
      up();
      console.log("up")
    }
    else if( keypressed==40){
     down();
     console.log("down")
    }
    else if( keypressed==37){
        left();
        console.log("left")
    }
    else if( keypressed==39){
        right();
        console.log("right")
    }
}

function up(){
  if (greencar_y >=0){
      greencar_y-=10
      console.log("when up arrow pressed, x="+greencar_x+"|| y="+greencar_y)
      uploadbackground();
      uploadgreencar();
  }
}

function down(){
    if (greencar_y<=400){
        greencar_y+=10
        console.log("when down arrow pressed, x="+greencar_x+"|| y=+"+greencar_y)
        uploadbackground();
      uploadgreencar();
    }
}

function left(){
    if (greencar_x>=0){
        greencar_x-=10
        console.log("when left arrow pressed, x="+greencar_x+"|| y=+"+greencar_y)
        uploadbackground();
      uploadgreencar();
    }
}

function right(){
    if (greencar_x<=700){
        greencar_x+=10
        console.log("when right arrow pressed, x="+greencar_x+"|| y=+"+greencar_y)
        uploadbackground();
      uploadgreencar();
    }
}
