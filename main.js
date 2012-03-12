var video = document.getElementById('live');

navigator.webkitGetUserMedia(
    'video',
    // success
    function ( stream ) {
        video.src = window.webkitURL.createObjectURL( stream );
        document.getElementById('msg').innerHTML = 'get video stream';
    },
    function ( error ) {
        console.log('Unable to get video stream');
    }
);

document.getElementById('capture').onclick = function () {
    var context = document.getElementById('canvas1').getContext('2d');
    context.drawImage(video, 0, 0);
};