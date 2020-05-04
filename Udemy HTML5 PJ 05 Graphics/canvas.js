//1 - Get object
//2 - Set Parameters/Properties
//3 - Action - make Shape or Line

function makeCanvas() {
    var PI_TWO = Math.PI*2;
    
    ///Canvas 1 - Text
    
    //1 - Get Object
    
    var canvas1 = document.getElementById('canvas1');
    var ctx1 = canvas1.getContext('2d');
    
    //2 - Set Properties
    ctx1.font = '32pt Arial';
    ctx1.fillStyle = 'DeepSkyBlue';
    ctx1.strokeStyle = 'black';
    
    //3 - Action
    ctx1.fillText ("I Love Alfa Romeo",30,150);
    ctx1.strokeText("I Love Alfa Romeo",30,150);
    
    
    ///Canvas 2 - Squares
    
    //1 - Get Object
    var canvas2 = document.getElementById('canvas2');
    var ctx2 = canvas2.getContext('2d');
    
    //2 - Set Properties
    ctx2.fillStyle = "#ff0000";
    ctx2.strokeStyle = "#000000";
    ctx2.lineWidth = "10";
    
    //3 - Make Rectangles
    ctx2.fillRect(45,5,135,135);
    ctx2.strokeRect(45,5,135,135);
    
    ctx2.fillStyle = "#666666";
    ctx2.fillRect(200,0,135,135);
    
    ctx2.fillStyle = "#666666";
    ctx2.fillRect(45,150,135,135);
    
    ctx2.fillStyle = "#ff0000";
    ctx2.strokeStyle = "#000000";
    ctx2.lineWidth = "10";
    
    ctx2.fillRect(200,150,135,135);
    ctx2.strokeRect(200,150,135,135);
    
    ///Canvas 3 - Lines
    //1 - Get Object
    var canvas3 = document.getElementById('canvas3');
    var ctx3 = canvas3.getContext ('2d');
    
    //2 - Set Properties
    ctx3.strokeStylуe = "#666666";
    ctx3.fillStyle = "#ff0000";
    ctx3.lineWidth = "5px";
    
    ///3 - Make Lines and Fill
    ctx3.beginPath();
    ctx3.moveTo(100,100);
    ctx3.lineTo(150,200);
    ctx3.lineTo(200,200);
    ctx3.lineTo(200,290);
    ctx3.lineTo(290,290);
    ctx3.lineTo(290,100);
    ctx3.lineTo(100,100);
    ctx3.stroke();
    ctx3.fill();
    ctx3.closePath;
    
    ///Canvas 4 - Circles
    //1 - Get Object
    var canvas4 = document.getElementById ('canvas4');
    var ctx4 = canvas4.getContext ('2d');
    
    //2 - Set Properties
    ctx4.fillStyle = "blue";
    
    //3 - Make Circles
    ctx4.beginPath();
    ctx4.arc(200,30,25,0,PI_TWO);
    ctx4.fill();
    ctx4.closePath();
    
    ctx4.fillStyle = "red";
    
    ctx4.beginPath();
    ctx4.arc(200,100,45,0,PI_TWO);
    ctx4.fill();
    ctx4.closePath();
    
    ctx4.fillStyle = "black";
    
    ctx4.beginPath();
    ctx4.arc(200,220,75,0,PI_TWO);
    ctx4.fill();
    ctx4.closePath();

    ///Canvas 5 - Animation
    //1 - Get Object
    var canvas5 = document.getElementById ('canvas5');
    var ctx5 = canvas5.getContext ('2d');
    var posX = 0;
    var posY = 0;
    
    //2 - Ser Properties
    setInterval (function(){
        posX += 1;
        posY += 1;
        ctx5.fillStyle = "black";
        ctx5.fillRect(0,0,canvas5.width,canvas5.height);
        
        ctx5.fillStyle = "white";
        ctx5.beginPath();
        ctx5.arc(posX,120,55,0,PI_TWO);
        ctx5.fill();
        
        ctx5.fillStyle = "red";
        ctx5.beginPath();
        ctx5.arc(150,posY,55,0,PI_TWO);
        ctx5.fill();
        
        ctx5.fillStyle = "blue";
        ctx5.beginPath();
        ctx5.arc(350,posY,55,0,PI_TWO);
        ctx5.fill();
        
    },30)
}