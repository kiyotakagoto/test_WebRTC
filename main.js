var video = document.getElementById('live');

navigator.webkitGetUserMedia(
    'video',
    // success
    function ( stream ) {
        video.src = window.webkitURL.createObjectURL( stream );
    },
    function ( error ) {
        console.log('Unable to get video stream');
    }
);
