var CAPTURE = {};
CAPTURE['interval'] = 200;
CAPTURE['capture_buffer'] = []
CAPTURE['capture_sequence'];

var video = document.getElementById('live');

/**
 * ビデオ表示
 */
navigator.webkitGetUserMedia(
    'video',
    // success
    function ( stream ) {
        video.src = window.webkitURL.createObjectURL( stream );
        console.log('get video stream');
    },
    function ( error ) {
        console.log('Unable to get video stream');
    }
);

/**
 * キャプチャーイベント登録
 */
document.getElementById('live').onclick = function () {
    var just_before = CAPTURE['capture_buffer'];
    var context = document.getElementById('main').getContext('2d');
    context.drawImage(video, 0, 0);
};

/**
 * キャプチャー画像保存
 */
/*
function saveImage () {
    var capture_image = document.getElementById('main').toDataURL();
    capture_image = imgdata.replace('data:image/png;base64,', '');

    $.ajax( {
        url : '',
        type : 'POST',
        data : 'capture=' + capture_image,
        success : function () {
            console.log('success');
        },
        error : function () {
            console.log('error');
        }
    } );
}
*/
