var canvas = null,
    context = null,
    currentFrame =0,
    framerate = 1000/30,
    frameCount = 0,
    img = null;

var assets = [
        'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk00.png',
        'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk01.png',
        'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk02.png',
        'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk03.png',
        'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk04.png',
        'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk05.png',
        'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk06.png',
        'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk07.png',
        'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk08.png',
        'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk09.png',
        'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk10.png',
        'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk11.png',
        'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk12.png',
        'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk13.png',
        'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk15.png',
        'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk16.png',
        'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk17.png',
        'https://www.udacity.com/media/js/standalone/libs/gamedev_assets/robowalk/robowalk18.png'
    ];

var frames = [];

var onImageLoad = function(){
    console.log('loaded');
}

var setup = function(){
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    img = new Image();
    img.onload = onImageLoad;
    img.src = "/images/ralphyrobot.png";

    for(var i=0; i < assets.length; i++){
        var img = new Image();
        img.onload = onImageLoad;
        img.src = assets[i];
        frames.push(img);
    }

    setInterval(animate,framerate);
}

var animate = function(){
    // Draw each frame in order, looping back around to the
    // beginning of the animation once you reach the end.
    // Draw each frame at a position of (0,0) on the canvas.

    context.drawImage(frames[currentFrame],0,0);
    currentFrame = currentFrame + 1;

};

setup()