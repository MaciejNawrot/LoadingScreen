/**
 * Created by WafelWeedJr on 2017-04-18.
 */




var start=(window.innerWidth/100)*20;

var end=(window.innerWidth/100)*30;
var jump=1;





var moveItem = function (start, end, jump, object) {
    var clock;

    var moveRight = function (object, jump) {

            if(parseFloat(object.style.left)<end){

                object.style.left=parseFloat(object.style.left) + jump + "px";



            } else
            {
                clearInterval(clock);
            }
    };

    var moveLeft= function (object, jump) {



        if(parseFloat(object.style.left)>end){

            object.style.left=parseFloat(object.style.left) - jump + "px";



        } else
        {
            clearInterval(clock);
        }
    };


        if(start<end){
            clock= setInterval(function () {moveRight(object, jump)}, 100);
        } else{
            clock= setInterval(function () {moveLeft(object, jump)}, 100);
        }

};

var slideOne= function () {
    var container=document.querySelector(".background");

    var bg=document.querySelector(".gta-bg");
    var char=document.querySelector(".gta-char");

    bg.classList.add("remove");
    container.removeChild(bg);

    char.classList.add("remove");
    container.removeChild(char);

    bg.classList.remove("remove");
    char.classList.remove("remove");

    var divBg=document.createElement("div");
    divBg.classList.add("gta-bg");
    divBg.style.display="block";
    divBg.style.backgroundImage="url('images/gta4-background.jpg')";

    var divChar=document.createElement("div");


    divChar.classList.add("gta-char");
    divChar.style.display="block";
    divChar.style.height="90%";
    divChar.style.width="525px";
    divChar.style.backgroundImage="url('images/Niko-Bellic-Full.png')";
    var startOfMovement=parseInt((window.innerWidth/100)*20);
    var endOfMovement=parseInt((window.innerWidth/100)*25);

    divChar.style.left=startOfMovement+"px";

    container.appendChild(divBg);
    container.appendChild(divChar);

    moveItem(startOfMovement,endOfMovement,1,divChar);


};

var slideTwo= function () {
    var container=document.querySelector(".background");

    var bg=document.querySelector(".gta-bg");
    var char=document.querySelector(".gta-char");

    bg.classList.add("remove");
    container.removeChild(bg);


    char.classList.add("remove");
    container.removeChild(char);

    bg.classList.remove("remove");
    char.classList.remove("remove");



    var divBg=document.createElement("div");
    divBg.classList.add("gta-bg");
    divBg.style.display="block";
    divBg.style.backgroundImage="url('images/gta5-background.jpg')";

    var divChar=document.createElement("div");
    divChar.classList.add("gta-char");
    divChar.style.backgroundImage="url('images/gta-girl2.png')";
    divChar.style.display="block";
    divChar.style.height="80%";
    divChar.style.width="420px";
    var startOfMovement=parseInt((window.innerWidth/100)*55);
    var endOfMovement=parseInt((window.innerWidth/100)*45);

    divChar.style.left=startOfMovement+"px";

    container.appendChild(divBg);
    container.appendChild(divChar);

    moveItem(startOfMovement,endOfMovement,1,divChar);
};


window.addEventListener("load",function () {
    var delay=8000;
    slideOne();

    setTimeout(function () {
        slideTwo();
    },delay);
    setTimeout(function () {
        slideOne();
    },delay*2);

    var i=3;

    for(i;i<10;i+=2){

        setTimeout(function () {
            slideTwo();
        },delay*i);
        setTimeout(function () {
            slideOne();
        },delay*i+delay);


    }

},false);
