$(document).ready(function(){
    var score =0;
    $("#start").click(function(){
        $(this).fadeOut('fast');
        $("#score").show();

        generateLetters();

        var seconde=1000;
        function timer(){
            setTimeout(timer,1000);
            $("#countdown").html(seconde);
            seconde--;

            if(seconde<0){
                seconde =0;
                $("#countdown").html("Fini !");
                //var url ="http://www.harry-john.org";
                //$(location).attr("href",url);
            }
        }
        timer();
    
    });


$(document).keydown(function(event){
    var keycode = String.fromCharCode(event.which);
    $(".letter"+keycode).animate({ "top" : "20px", "opacity":0}, "fast");
    $(".letter"+keycode).fadeOut("slow").hide("slow", function()
        {
            score+=5;
            $("#score span").html(score);
            $(this).remove();
        }

    );
});





function generateLetters(){
    var color = generateColor();
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrtsuvwxyz";
    var string_length = 1;
    var randomstring = "";
    for (var i=0;i<string_length;i++){
        var num = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(num, num+1);
    }
    var top = Math.floor(Math.random() * 400);
    var left = Math.floor(Math.random() * 700);
    $("#container").append(
 '<span class ="letter letter' + randomstring + '" style="left: ' + left +'; top :'+top+'; background-color:#'+color+'">'+ randomstring +'</span>');
    setTimeout(generateLetters, 1000);
}

function generateColor(){
    var color = "";
    var values = ["a","b","c","d","e","f","1","2","3","4","5","6","7","8","9","0"];
    for (var c=0;c<6;c++){
        le = Math.floor(Math.random() * 10);
        color += values[le];
    }
    return color;
    }

});