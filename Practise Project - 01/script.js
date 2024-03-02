var rect = document.querySelector("#center");
rect.addEventListener("mousemove", function (dets) {
    // console.log("moved");
    // console.log(rect.getBoundingClientRect());
    var rectangleLocation = rect.getBoundingClientRect();
    // console.log(dets.clientX);
    var insiderectval = (dets.clientX - rectangleLocation.left);
    // if(insiderectval < rectangleLocation.width/2){
    //     console.log("left");
    // }
    // else{
    //     console.log("right");
    // }
    var percentage = (dets.clientX - rect.getBoundingClientRect().left) / rect.offsetWidth;
    var red,green;
    if(percentage < 0.5){
        red=255-Math.floor(204*percentage*2);
        green=255;
    }
    else{
        red=255;
        green=255-Math.floor(255 * (percentage - 0.5) * 2);
    }
    rect.style.backgroundColor= 'rgb(' + red + ',' + green + ',0)';
});