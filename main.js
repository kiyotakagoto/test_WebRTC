/**
 * 
 */
$('#source_url').change( function () {
    $('#picture').attr( 'src', $(this).attr('value') );
    var context = document.getElementById('main').getContext('2d');
    context.drawImage( document.getElementById('picture'), 0, 0);
});

$('#save_button').click( function () {
    saveImage();
});

/**
 * キャプチャー画像保存
 */
function saveImage () {
    var capture_image = document.getElementById('main').toDataURL();
    capture_image = imgdata.replace('data:image/png;base64,', '');

    $.ajax( {
        url : './save.pl',
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
