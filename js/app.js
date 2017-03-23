$(document).ready(function () {

//SET DEFAULT IMAGE
    if (!$('#image', this).attr('src') == '') {
        $('#image', this).attr('src', 'css/images/upload-logo.png');
    }

    //UPLOAD A FILE
    function readURL(input) {
        if (input.files && input.files[0]) {

            //instanciate file reader
            var reader = new FileReader();
            //function handle the file reader
            reader.onload = function (e) {
                //assign to the image attr src url
                $('#image').attr('src', e.target.result);
                $('#image').css('z-index', '0000');
                $('#divImage').css('z-index', '1111');
                //$('#divImage').attr('background-image', "url("+e.target.result+")");
            }
            // return the first url of the input file.
            reader.readAsDataURL(input.files[0]);
        }
    }
    //invoke the function while change the value
    $("#uploadFile").change(function () {
        readURL(this);
        set_image_shape();
    });

    //invoke the function while click the element
    $("#uploadFile").click(function () {
        add_buttongroup_div();

    });



    //CHANGE IMAGE SIZE AND SHAPE;
    function set_image_shape() {
        $("input:radio[name=formes]").on('change', (function () {
            var forme_value = $(this).val();
            //Add Buttons in divImage
            if (forme_value === "1") {
                $("#image").css('height', '500').css('width', '500').css('border-radius', '0%');
            } else if (forme_value === "2") {
                $("#image").css('height', '500').css('width', '440').css('border-radius', '0%');
            } else if (forme_value === "3") {
                $("#image").css('height', '500').css('width', '500').css('border-radius', '50%');
            }
        }));
    }


    //ADD BUTTON DIV
    function add_buttongroup_div() {
        $("#divImage").prepend("<div id='btnGroup' style='position:absolute' ></div>");
    }

    
    function add_button() {
        var counter = 1;
        $("#addBtn").click(function () {
            if (counter > 5) {
                alert("5 boutons sont maximum!");
                return false;
            }

            //ADD NEW BUTTON
            var aBtn = "<div class='btnDiv"+counter+" ui-widget-content'><a id='bouton"+counter+"'class='btn btn-danger'>bouton"+counter+"</a>";       
            
            if($("#uploadFile").length){
                 $("#btnGroup").prepend(aBtn);
            }
               
            $("#bouton"+counter).css("height:auto;width:auto");
            counter++;

            // REMOVE BUTTON
            $("#removeButton").one('click', (function () {
                if (counter === 0) {
                    alert("No more buttons to remove");
                    return false;
                }
                counter--;
                $(".btnDiv"+counter).remove();
            }));

            // ALERT BUTTON VALUE
            $("#getButtonValue").click(function () {
                var counter =1;
                if(counter > 5){
                    alert("maximum button reached!");
                }
                else {
                   
                }
                
                for (i = 1; i < counter; i++) {
                    msg += "\n Textbox #" + i + " : " + $('#textbox' + i).val();
                }
                alert(msg);
            });
            
            //ACTIVATE RESIZABLE
            $(".btnDiv1").resizable();
            $(".btnDiv2").resizable();
            $(".btnDiv3").resizable();
            $(".btnDiv4").resizable();
            $(".btnDiv5").resizable();
            
            //ACTIVATE DRAGGABLE
            $(".btnDiv1").draggable();
            $(".btnDiv2").draggable();
            $(".btnDiv3").draggable();
            $(".btnDiv4").draggable();
            $(".btnDiv5").draggable();
            
        });
    }add_button();

    function rename_button(){
        var counter;
        for(counter=1; counter<5; counter++){
            if(("#btnDiv"+counter).length){
                
            }
            
        }
    }rename_button();


    //ADD CLOSE BUTTON
    function add_close_button() {
        $("#addClsBox").on('change', (function () {
            if (this.checked) {
                //Do stuff
                //alert("checked");
                $("#divImage").append("<button id='close_button' aria-label='Close'><span aria-hidden='true'>&times;</span></button>");
            } else {
                if ($("#close_button")) {
                    $("#close_button").remove();
                }
            }
        }));
    }add_close_button();


});