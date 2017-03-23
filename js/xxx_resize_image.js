$(document).ready(function () {
    var image = $('#image');
    var instr1 = $('#instr1');
    var width = $(this).width();
    var height = $(this).height();
    var maxWidth = 200;
    var maxHeight = 300;
    var ratio = 0;

    //resize using doubleclick
    /*$(image).on('dblclick', (function () {
        if (maxWidth != width && maxHeight != height) {
            //set new height and width
            $(this).css("width", maxWidth);
            $(this).css("height", maxHeight);

        }
    }));*/

});


$(document).ready(function () {
    function readURL() {
        var uploadFile = $("#uploadFile");
        if (uploadFile.files && uploadFile.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#image') 
                        .attr('src', e.target.result)
                        .width(150)
                        .height(200);
            };
            reader.readAsDataURL(uploadFile.files[0]);
        }
    }
});





