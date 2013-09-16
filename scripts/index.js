var canvas = null,
    context = null
    img = null;

var onImageLoad = function(){
    context.drawImage()
}

var setup = function(){
    canvas = document.getElementById('canvas')
    context = canvas.getContext('2d')
    canvas.width = 1200
    canvas.height = 720

    img = new Image();
    img.onload = onImageLoad;
    img.src = "/media/img/gamedev/ralphyrobot.png";
}

setup()