var CAPTURE = {};
CAPTURE['interval'] = 200;
CAPTURE['capture_buffer'] = []
CAPTURE['capture_sequence'];

var video = document.getElementById('live');

navigator.webkitGetUserMedia(
    'video',
    // success
    function ( stream ) {
        video.src = window.webkitURL.createObjectURL( stream );
        document.getElementById('msg').innerHTML = 'get video stream';
        CAPTURE['capture_sequence'] = setInterval( function () {
            if ( CAPTURE['capture_buffer'].length >= 5 ) {
                CAPTURE['capture_buffer'].shift;
            }
            CAPTURE['capture_buffer'].push(video);
        }, CAPTURE['interval']);
    },
    function ( error ) {
        console.log('Unable to get video stream');
    }
);

document.getElementById('capture').onclick = function () {
    var context = document.getElementById('main').getContext('2d');
    context.drawImage(video, 0, 0);

    for ( var i = 1; i <= CAPTURE['capture_buffer'].length; ++i ) {
        var context = document.getElementById('sub' + i).getContext('2d');
        context.drawImage( CAPTURE['capture_buffer'][i-1], 0, 0);
        if ( i >= 5 ) {
            break;
        }
    }
};

