var canvas = null,
    context = null;

setup = function(){
    canvas = document.getElementById('canvas')
    context = canvas.getContext('2d')
    canvas.width = 1200
    canvas.height = 720

}

setup()